# IMsBranchConditionNotEmpty

IMsBranchConditionNotEmpty
-


# IMsBranchConditionNotEmpty


Сборка: Ms;


## Описание


Интерфейс IMsBranchConditionNotEmpty
 предназначен для работы с условием расчёта ветки условия в [цепочке](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm)
 метамодели. Тип условия расчёта ветки - указанный ряд должен содержать
 данные.


## Иерархия наследования


           [IMsBranchCondition](../IMsBranchCondition/IMsBranchCondition.htm)


           [IMsBranchConditionNotEmpty](IMsBranchConditionNotEmpty.htm)


## Комментарии


Для получения данного типа ветки условия используйте метод [IMsBranchConditions.Add](../IMsBranchConditions/IMsBranchConditions.Add.htm) с параметром
 [MsBranchConditionType.NotEmpty](../../Enums/MsBranchConditionType.htm)
 и приведите полученный объект к интерфейсу IMsBranchConditionNotEmpty.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Slice](IMsBranchConditionNotEmpty.Slice.htm)
		 Свойство Slice возвращает
		 срез, соответствующий ряду, проверяемому на пустоту.


## Свойства, унаследованные от [IMsBranchCondition](../IMsBranchCondition/IMsBranchCondition.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ConditionJoin](../IMsBranchCondition/IMsBranchCondition.ConditionJoin.htm)
		 Свойство ConditionJoin
		 определяет оператор объединения с предыдущим условием.


		 ![](../../Property_Image.gif)
		 [ParamAttributes](../IMsBranchCondition/IMsBranchCondition.ParamAttributes.htm)
		 Свойство ParamAttributes
		 возвращает параметр и цепочку атрибутов.


		 ![](../../Property_Image.gif)
		 [Type](../IMsBranchCondition/IMsBranchCondition.Type.htm)
		 Свойство Type возвращает
		 тип условия.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [SetStub](IMsBranchConditionNotEmpty.SetStub.htm)
		 Метод SetStub устанавливает
		 источник данных, который содержит ряд, проверяемый на пустоту.


## Методы, унаследованные от [IMsBranchCondition](../IMsBranchCondition/IMsBranchCondition.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [LoadFromXml](../IMsBranchCondition/IMsBranchCondition.LoadFromXml.htm)
		 Метод LoadFromXml выполняет
		 загрузку параметров условия расчёта ветки из XML-файла.


		 ![](../../Sub_Image.gif)
		 [SaveToXml](../IMsBranchCondition/IMsBranchCondition.SaveToXml.htm)
		 Метод SaveToXml выполняет
		 выгрузку параметров условия расчёта ветки в XML-файл.


См. также:


[Интерфейсы сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
