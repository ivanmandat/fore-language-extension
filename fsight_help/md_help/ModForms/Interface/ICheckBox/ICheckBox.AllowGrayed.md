# ICheckBox.AllowGrayed

ICheckBox.AllowGrayed
-


# ICheckBox.AllowGrayed


## Синтаксис


AllowGrayed: Boolean;


## Описание


Свойство AllowGrayed определяет,
 будет ли в компоненте возможность установить промежуточное состояние.


## Комментарии


Если свойству установить значение True,
 то в компоненте будет возможность установить промежуточное состояние.
 Для установки данного состояния необходимо в свойстве [State](ICheckBox.State.htm)
 установить значение [CheckBoxState.Grayed](../../Enums/CheckBoxState.htm).


По умолчанию свойству AllowGrayed
 установлено значение False, при
 этом для флажка компонента можно установить только два состояния: отмечен
 или не отмечен. Для установки состояния флажка используется свойство [Checked](ICheckBox.Checked.htm) или [State](ICheckBox.State.htm).


См.также:


[ICheckBox](ICheckBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
