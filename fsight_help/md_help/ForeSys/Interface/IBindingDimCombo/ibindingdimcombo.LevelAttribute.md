# IBindingDimCombo.LevelAttribute

IBindingDimCombo.LevelAttribute
-


# IBindingDimCombo.LevelAttribute


## Синтаксис


LevelAttribute: String;


## Описание


Свойство LevelAttribute определяет
 значение параметра «LEVELATTR»
 в [строке связи](../IBindingValue/IBindingValue.AsString.htm).


## Комментарии


Параметр «LEVELATTR» определяет
 строку, в которой указан тип отображения наименований определенных уровней
 элементов. Для каждого уровня справочника можно определить свой тип отображения.
 В качестве значения свойства LevelAttribute
 укажите строку следующего вида - 0{X1*Y1,X2*Y2,...,Xn*Yn},
 где:


	- X1-Xn - ключи уровней
	 справочника, для которого необходимо выбрать тип отображения;


	- Y1-Yn - ключи атрибутов
	 справочника, значения которых будут отображаться в качестве наименований
	 элементов;


	- 0 - индекс столбца,
	 в котором применяются указанные настройки. Индексация столбцов начинается
	 с нуля. В текущей реализации редактор «Раскрывающийся список справочника»
	 может содержать только один столбец.


Свойство LevelAttribute доступно
 для использования, если свойству [IBindingDimCombo.LevelAttributeDefined](IBindingDimCombo.LevelAttributeDefined.htm)
 установлено значение True. При
 изменении свойства LevelAttribute
 свойству [IBindingDimCombo.LevelAttributeDefined](IBindingDimCombo.LevelAttributeDefined.htm)
 автоматически устанавливается значение True.


## Пример


Пример использования приведен в описании свойства [IBindingDimCombo.Group](ibindingdimcombo.group.htm).


См. также:


[IBindingDimCombo](ibindingdimcombo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
