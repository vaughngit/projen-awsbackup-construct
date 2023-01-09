import { Duration, CfnOutput, aws_backup as bk, aws_events as events } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export interface BackupProps {
  /**
   * Resources to apply backup plan.
   */
  readonly resources: bk.BackupResource[];

  /**
   * The display name of the backup plan.
   */
  readonly backupPlanName: string;

  /**
   * The duration after a backup job is successfully
   * started before it must be completed or it is
   * canceled by AWS Backup.
   *
   * Note: `backupCompletionWindow` must be at least 60 minutes greater
   * than @backupStartWindows
   *
   * @default - 3 hours
   */
  readonly backupCompletionWindow?: Duration;

  /**
   * The duration after a backup is scheduled before
   * a job is canceled if it doesn't start successfully.
   *
   * @default - 1 hour less than @backupCompletionWindow
   */
  readonly backupStartWindow?: Duration;

  /**
   * Specifies the time after creation that a recovery point is deleted.
   * Must be greater than moveToColdStorageAfter.
   *
   * @default - 60 days
   */
  readonly deleteBackupAfter?: Duration;

  /**
   * Specifies the time after creation that a recovery point is moved to cold storage.
   *
   * @default - 45 recovery point is never moved to cold storage
   */
  readonly moveBackupToColdStorageAfter?: Duration;

  /**
   * How frequently backup jobs would be started.
   *
   * @default - 3
   */
  readonly startHour?: number;

  /**
   * How frequently backup jobs would be started.
   *
   * @default - 0
   */
  readonly startMinute?: number;
}

/**
 * Construct to create a Backup Plan with specific backing cadence.
 *
 * @stability stable
 */
export class vtBackupConstruct extends Construct {
  /**
   * Backup plan
   */
  public readonly backupPlan: bk.BackupPlan;
  /**
   *
   * @param scope Construct's scope
   * @param id Construct's id
   * @param props Construct's props
   */
  constructor(scope: Construct, id: string, props: BackupProps) {
    super(scope, id);

    //const hourlyRate = `0/${props.backupRateHour || 24}`;
    const {
      startHour = 5,
      startMinute = 0,
    } = props;

    if ((startHour! < 0) || ( startHour! > 23) ) {
      throw Error(
        'Backup hour must be between 0 and 23 hours',
      );
    }

    const completionWindow = props.backupCompletionWindow || Duration.hours(3);
    const startWindow = props.backupStartWindow || Duration.hours(completionWindow.toHours() - 1);

    if (completionWindow.toHours() - startWindow.toHours() < 1) {
      throw Error(
        'Backup completion window must be at least 60 minutes greater than backup start window',
      );
    }

    const scheduledBkRule = new bk.BackupPlanRule({
      completionWindow,
      startWindow,
      deleteAfter: props.deleteBackupAfter || Duration.days(90),
      // Only cron expressions are supported
      scheduleExpression: events.Schedule.cron({
        minute: startMinute.toString(),
        // hour: hourlyRate,
        hour: startHour.toString(),
      }),
      moveToColdStorageAfter: props.moveBackupToColdStorageAfter,
    });

    this.backupPlan = new bk.BackupPlan(this, 'BackupPlan', {
      backupPlanName: props.backupPlanName,
      backupPlanRules: [scheduledBkRule],
    });

    this.backupPlan.addSelection('BackupSelection', {
      resources: props.resources,
    });

    // Outputs
    const outputVars = {
      BackupPlanId: this.backupPlan.backupPlanId,
      BackupPlanArn: this.backupPlan.backupPlanArn,
    };
    Object.entries(outputVars).forEach(
      ([outName, outValue]) => new CfnOutput(this, outName, { value: outValue }),
    );
  }
}
