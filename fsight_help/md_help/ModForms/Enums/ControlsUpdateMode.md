# ControlsUpdateMode

ControlsUpdateMode
-


# ControlsUpdateMode


## Описание


Перечисление ControlsUpdateMode
 содержит варианты пересчета размеров компонентов формы.


Используется следующими свойствами и методами:


	- [IFormControl.BeginUpdate](../Interface/IFormControl/IFormControl.BeginUpdate.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 ResizeOnUpdate.
		 Размеры компонент пересчитываются.


		 1
		 LockResizeOnUpdate.
		 Размеры компонент пересчитываться не будут. Используется для оптимизации
		 работы с формой.


## Комментарии


В режиме LockResizeOnUpdate
 будет отключен пересчет размеров компонентов, для которых установлены
 [привязки к границам](../Interface/IAnchors/IAnchors.htm) или
 [способ выравнивания](../Interface/IControl/IControl.Align.htm)
 относительно границ родительского компонента.


См. также:


[Перечисления
 сборки Forms](ModForms_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
