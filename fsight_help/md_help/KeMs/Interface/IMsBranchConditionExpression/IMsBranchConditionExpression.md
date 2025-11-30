# IMsBranchConditionExpression

IMsBranchConditionExpression
-


# IMsBranchConditionExpression


Сборка: Ms;


## Описание


Интерфейс IMsBranchConditionExpression
 предназначен для работы с условием расчёта ветки условия в [цепочке](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm)
 метамодели. Тип условия расчёта ветки - выражение.


## Иерархия наследования


           [IMsBranchCondition](../IMsBranchCondition/IMsBranchCondition.htm)


           IMsBranchConditionExpression


## Комментарии


Для получения условия расчёта ветки приведите интерфейс [IMsBranchCondition](../IMsBranchCondition/IMsBranchCondition.htm)
 к интерфейсу IMsBranchConditionExpression.
 Операция допустима, если [IMsBranchCondition.Type](../IMsBranchCondition/IMsBranchCondition.Type.htm) = [MsBranchConditionType.Expression](../../Enums/MsBranchConditionType.htm).


Для создания простого условия используйте свойство [IMsBranchConditionExpression.Expression](IMsBranchConditionExpression.Expression.htm).
 Для создания сложного условия, например с участием термов, используйте
 свойство [IMsBranchConditionExpression.Transform](IMsBranchConditionExpression.Transform.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Expression](IMsBranchConditionExpression.Expression.htm)
		 Свойство Expression
		 возвращает выражение для расчёта условия.


		 ![](../../Property_Image.gif)
		 [Transform](IMsBranchConditionExpression.Transform.htm)
		 Свойство Transform
		 возвращает параметры настройки сложного условия расчёта.


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
