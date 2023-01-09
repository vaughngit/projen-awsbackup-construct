# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupConstruct <a name="BackupConstruct" id="cdk-backup-plan.BackupConstruct"></a>

Construct to create a Backup Plan with specific backing cadence.

#### Initializers <a name="Initializers" id="cdk-backup-plan.BackupConstruct.Initializer"></a>

```typescript
import { BackupConstruct } from 'cdk-backup-plan'

new BackupConstruct(scope: Construct, id: string, props: BackupProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-backup-plan.BackupConstruct.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | Construct's scope. |
| <code><a href="#cdk-backup-plan.BackupConstruct.Initializer.parameter.id">id</a></code> | <code>string</code> | Construct's id. |
| <code><a href="#cdk-backup-plan.BackupConstruct.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-backup-plan.BackupProps">BackupProps</a></code> | Construct's props. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-backup-plan.BackupConstruct.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

Construct's scope.

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-backup-plan.BackupConstruct.Initializer.parameter.id"></a>

- *Type:* string

Construct's id.

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-backup-plan.BackupConstruct.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-backup-plan.BackupProps">BackupProps</a>

Construct's props.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-backup-plan.BackupConstruct.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-backup-plan.BackupConstruct.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-backup-plan.BackupConstruct.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-backup-plan.BackupConstruct.isConstruct"></a>

```typescript
import { BackupConstruct } from 'cdk-backup-plan'

BackupConstruct.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-backup-plan.BackupConstruct.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-backup-plan.BackupConstruct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-backup-plan.BackupConstruct.property.backupPlan">backupPlan</a></code> | <code>aws-cdk-lib.aws_backup.BackupPlan</code> | Backup plan. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-backup-plan.BackupConstruct.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `backupPlan`<sup>Required</sup> <a name="backupPlan" id="cdk-backup-plan.BackupConstruct.property.backupPlan"></a>

```typescript
public readonly backupPlan: BackupPlan;
```

- *Type:* aws-cdk-lib.aws_backup.BackupPlan

Backup plan.

---


## Structs <a name="Structs" id="Structs"></a>

### BackupProps <a name="BackupProps" id="cdk-backup-plan.BackupProps"></a>

#### Initializer <a name="Initializer" id="cdk-backup-plan.BackupProps.Initializer"></a>

```typescript
import { BackupProps } from 'cdk-backup-plan'

const backupProps: BackupProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-backup-plan.BackupProps.property.backupPlanName">backupPlanName</a></code> | <code>string</code> | The display name of the backup plan. |
| <code><a href="#cdk-backup-plan.BackupProps.property.resources">resources</a></code> | <code>aws-cdk-lib.aws_backup.BackupResource[]</code> | Resources to apply backup plan. |
| <code><a href="#cdk-backup-plan.BackupProps.property.backupCompletionWindow">backupCompletionWindow</a></code> | <code>aws-cdk-lib.Duration</code> | The duration after a backup job is successfully started before it must be completed or it is canceled by AWS Backup. |
| <code><a href="#cdk-backup-plan.BackupProps.property.backupStartWindow">backupStartWindow</a></code> | <code>aws-cdk-lib.Duration</code> | The duration after a backup is scheduled before a job is canceled if it doesn't start successfully. |
| <code><a href="#cdk-backup-plan.BackupProps.property.deleteBackupAfter">deleteBackupAfter</a></code> | <code>aws-cdk-lib.Duration</code> | Specifies the time after creation that a recovery point is deleted. |
| <code><a href="#cdk-backup-plan.BackupProps.property.moveBackupToColdStorageAfter">moveBackupToColdStorageAfter</a></code> | <code>aws-cdk-lib.Duration</code> | Specifies the time after creation that a recovery point is moved to cold storage. |
| <code><a href="#cdk-backup-plan.BackupProps.property.startHour">startHour</a></code> | <code>number</code> | How frequently backup jobs would be started. |
| <code><a href="#cdk-backup-plan.BackupProps.property.startMinute">startMinute</a></code> | <code>number</code> | How frequently backup jobs would be started. |

---

##### `backupPlanName`<sup>Required</sup> <a name="backupPlanName" id="cdk-backup-plan.BackupProps.property.backupPlanName"></a>

```typescript
public readonly backupPlanName: string;
```

- *Type:* string

The display name of the backup plan.

---

##### `resources`<sup>Required</sup> <a name="resources" id="cdk-backup-plan.BackupProps.property.resources"></a>

```typescript
public readonly resources: BackupResource[];
```

- *Type:* aws-cdk-lib.aws_backup.BackupResource[]

Resources to apply backup plan.

---

##### `backupCompletionWindow`<sup>Optional</sup> <a name="backupCompletionWindow" id="cdk-backup-plan.BackupProps.property.backupCompletionWindow"></a>

```typescript
public readonly backupCompletionWindow: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* 3 hours

The duration after a backup job is successfully started before it must be completed or it is canceled by AWS Backup.

Note: `backupCompletionWindow` must be at least 60 minutes greater
than @backupStartWindows

---

##### `backupStartWindow`<sup>Optional</sup> <a name="backupStartWindow" id="cdk-backup-plan.BackupProps.property.backupStartWindow"></a>

```typescript
public readonly backupStartWindow: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* 1 hour less than

The duration after a backup is scheduled before a job is canceled if it doesn't start successfully.

---

##### `deleteBackupAfter`<sup>Optional</sup> <a name="deleteBackupAfter" id="cdk-backup-plan.BackupProps.property.deleteBackupAfter"></a>

```typescript
public readonly deleteBackupAfter: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* 60 days

Specifies the time after creation that a recovery point is deleted.

Must be greater than moveToColdStorageAfter.

---

##### `moveBackupToColdStorageAfter`<sup>Optional</sup> <a name="moveBackupToColdStorageAfter" id="cdk-backup-plan.BackupProps.property.moveBackupToColdStorageAfter"></a>

```typescript
public readonly moveBackupToColdStorageAfter: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* 45 recovery point is never moved to cold storage

Specifies the time after creation that a recovery point is moved to cold storage.

---

##### `startHour`<sup>Optional</sup> <a name="startHour" id="cdk-backup-plan.BackupProps.property.startHour"></a>

```typescript
public readonly startHour: number;
```

- *Type:* number
- *Default:* 3

How frequently backup jobs would be started.

---

##### `startMinute`<sup>Optional</sup> <a name="startMinute" id="cdk-backup-plan.BackupProps.property.startMinute"></a>

```typescript
public readonly startMinute: number;
```

- *Type:* number
- *Default:* 0

How frequently backup jobs would be started.

---



