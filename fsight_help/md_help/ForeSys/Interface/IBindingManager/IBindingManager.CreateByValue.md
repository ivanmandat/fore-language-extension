# IBindingManager.CreateByValue

IBindingManager.CreateByValue
-


# IBindingManager.CreateByValue


## Синтаксис


CreateByValue(Value: String): [IBindingValue](../IBindingValue/IBindingValue.htm);


## Параметры


Value.
 Строка связи, на основании которой будут инициализированы настройки редактора
 значений.


## Описание


Метод CreateByValue инициализирует
 настройки редактора значений по строке связи.


## Комментарии


В качестве значения параметра Value
 должна быть передана строка вида «UI=...».
 При работе с объектами репозитория данная строка может быть получена в
 одном из следующих свойств:


	- [IMetabaseObjectParamBinding.AsString](KeSom.chm::/Interface/IMetabaseObjectParamBinding/IMetabaseObjectParamBinding.AsString.htm);


	- [IMsUserMethodTemplateParam.Binding](KeMs.chm::/Interface/IMsUserMethodTemplateParam/IMsUserMethodTemplateParam.Binding.htm);


	- [IPrxControl.Binding](KeReport.chm::/Interface/IPrxControl/IPrxControl.Binding.htm);


	- [ITabCellStyle.Binding](TabSheet.chm::/Interface/ITabCellStyle/ITabCellStyle.Binding.htm).


При выполнении метода будет произведен разбор указанной строки связи.
 При этом будут произведены следующие действия:


	- Будет определен тип редактора;


	- Будут выставлены соответствующие общие и специфические свойства
	 для настроек редактора.


В соответствии с типом редактора для дальнейшей работы полученные настройки
 необходимо привести к одному из интерфейсов, для которых [IBindingValue](../IBindingValue/IBindingValue.htm)
 является базовым.


## Пример


Пример использования приведен в описании свойства [IBindingEditBox.MultiLineDefined](../IBindingEditBox/IBindingEditBox.MultiLineDefined.htm).


См. также:


[IBindingManager](IBindingManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
