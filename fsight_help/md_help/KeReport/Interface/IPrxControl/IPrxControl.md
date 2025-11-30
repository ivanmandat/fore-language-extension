# IPrxControl

IPrxControl
-


# IPrxControl


Сборка: Report;


## Описание


Интерфейс IPrxControl содержит
 свойства элемента управления регламентного отчета.


## Иерархия наследования


           [INamedEntity](KeSom.chm::/Interface/INamedEntity/INamedEntity.htm)


           IPrxControl


## Комментарии


Элемент управления - объект,
 предназначенный для управления данными, отображаемыми объектами отчета.


Для работы с коллекцией элементов управления регламентного отчета используйте
 свойства и методы интерфейса [IPrxControls](../IPrxControls/IPrxControls.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Appearance](IPrxControl.Appearance.htm)
		 Свойство Appearance
		 определяет какими листами отчета будет управлять элемент управления.


		 ![](../../Property_Image.gif)
		 [AutoRecalc](IPrxControl.AutoRecalc.htm)
		 Свойство AutoRecalc
		 определяет, будет ли вычислен лист/отчет при смене значения элемента
		 управления.


		 ![](../../Property_Image.gif)
		 [Binding](IPrxControl.Binding.htm)
		 Свойство Binding определяет
		 параметры редактора, который будет использоваться для редактирования
		 значений элемента управления.


		 ![](../../Property_Image.gif)
		 [ControlledBy](IPrxControl.ControlledBy.htm)
		 Свойство ControlledBy
		 определяет управляющий параметр регламентного отчета.


		 ![](../../Property_Image.gif)
		 [Dimension](IPrxControl.Dimension.htm)
		 Свойство Dimension
		 определяет управляемое измерение.


		 ![](../../Property_Image.gif)
		 [RecalcOnChange](IPrxControl.RecalcOnChange.htm)
		 Свойство RecalcOnChange
		 определяет, будет ли генерироваться событие [OnChangeControlValue](../../Class/UiReport/UiReport.OnChangeControlValue.htm)
		 после каждого изменения значения в элементах управления, требующих
		 ручного ввода значений, без потери фокуса элементом управления.


		 ![](../../Property_Image.gif)
		 [RecalcSliceOnly](IPrxControl.RecalcSliceOnly.htm)
		 Свойство RecalcSliceOnly
		 определяет, будут ли вычисляться визуализаторы среза, измерение
		 которого задано в качестве [управляемого
		 измерения](IPrxControl.Dimension.htm), при смене значения элемента управления.


		 ![](../../Property_Image.gif)
		 [Selection](IPrxControl.Selection.htm)
		 Свойство Selection
		 возвращает отметку элемента управления.


		 ![](../../Property_Image.gif)
		 [Value](IPrxControl.Value.htm)
		 Свойство Value определяет
		 значение, установленное в элементе управления.


		 ![](../../Property_Image.gif)
		 [Width](IPrxControl.Width.htm)
		 Свойство Width определяет
		 ширину элемента управления.


## Методы


		 Имя свойства
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Recreate](IPrxControl.Recreate.htm)
		 Метод Recreate осуществляет
		 пересоздание элемента управления.


		 ![](../../Sub_Image.gif)
		 [SetValueC](IPrxControl.SetValueC.htm)
		 Метод SetValueC осуществляет
		 установку значения элемента управления и перевычисление отчета.


## Свойства, унаследованные от [INamedEntity](KeSom.chm::/Interface/INamedEntity/INamedEntity.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Id](KeSom.chm::/Interface/INamedEntity/INamedEntity.Id.htm)
		 Свойство Id определяет
		 идентификатор объекта.


		 ![](../../Property_Image.gif)
		 [Key](KeSom.chm::/Interface/INamedEntity/INamedEntity.Key.htm)
		 Свойство Key возвращает
		 ключ объекта.


		 ![](../../Property_Image.gif)
		 [Name](KeSom.chm::/Interface/INamedEntity/INamedEntity.Name.htm)
		 Свойство Name определяет
		 наименование объекта.


См. также:


[Интерфейсы сборки Report](../KeReport_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
