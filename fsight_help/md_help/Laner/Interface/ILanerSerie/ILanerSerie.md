# ILanerSerie

ILanerSerie
-


# ILanerSerie


Сборка: Laner;


## Описание


Интерфейс ILanerSerie содержит
 свойства для работы с рядом рабочей области.


## Иерархия наследования


           [INamedEntity](KeSom.chm::/Interface/INamedEntity/INamedEntity.htm)


           ILanerSerie


## Комментарии


Для работы с коллекцией рядов рабочей книги используйте интерфейс [ILanerSeries](../ILanerSeries/ILanerSeries.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CalendarDim](ILanerSerie.CalendarDim.htm)


		 Свойство CalendarDim
		 возвращает календарь ряда.


		 ![](../../Property_Image.gif)
		 [Dependencies](ILanerSerie.Dependencies.htm)


		 Свойство Dependencies
		 возвращает ряды, входящие в данный ряд.


		 ![](../../Property_Image.gif)
		 [Dependents](ILanerSerie.Dependents.htm)


		 Свойство Dependents
		 возвращает ряды, в которые данный ряд входит.


		 ![](../../Property_Image.gif)
		 [DisplayParams](ILanerSerie.DisplayParams.htm)


		 Свойство DisplayParams
		 возвращает параметры отображения данных ряда.


		 ![](../../Property_Image.gif)
		 [Hidden](ILanerSerie.Hidden.htm)


		 Свойство Hidden
		 определяет, скрыт ли ряд в рабочей книге.


		 ![](../../Property_Image.gif)
		 [Hint](ILanerSerie.Hint.htm)


		 Свойство Hint определяет
		 текст всплывающей подсказки для ряда данных.


		 ![](../../Property_Image.gif)
		 [IsChanged](ILanerSerie.IsChanged.htm)


		 Свойство IsChanged
		 возвращает признак наличия изменений в данных ряда.


		 ![](../../Property_Image.gif)
		 [Kind](ILanerSerie.Kind.htm)


		 Свойство Kind возвращает
		 тип ряда.


		 ![](../../Property_Image.gif)
		 [Laner](ILanerSerie.Laner.htm)


		 Свойство Laner возвращает
		 рабочую книгу базы данных временных рядов, содержащую данный ряд.


		 ![](../../Property_Image.gif)
		 [Level](ILanerSerie.Level.htm)


		 Свойство Level возвращает
		 календарную динамику ряда.


		 ![](../../Property_Image.gif)
		 [MetaAttributeValueList](ILanerSerie.MetaAttributeValueList.htm)


		 Свойство MetaAttributeValueList
		 возвращает коллекцию значений атрибутов ряда.


		 ![](../../Property_Image.gif)
		 [ObservationAttributeInValue](ILanerSerie.ObservationAttributeInValue.htm)


		 Свойство ObservationAttributeInValue
		 определяет наименование атрибута наблюдений, значения которого
		 отображаются в таблице рабочей книги.


		 ![](../../Property_Image.gif)
		 [ObservationValue](ILanerSerie.ObservationValue.htm)


		 Свойство ObservationValue
		 определяет значение атрибута наблюдения показателя в заданной
		 календарной точке.


		 ![](../../Property_Image.gif)
		 [Parent](ILanerSerie.Parent.htm)


		 Свойство Parent возвращает
		 группу, в которой содержится ряд.


		 ![](../../Property_Image.gif)
		 [ReadOnly](ILanerSerie.ReadOnly.htm)


		 Свойство ReadOnly
		 определяет, доступен ли ряд только для чтения.


		 ![](../../Property_Image.gif)
		 [ScenarioDimension](ILanerSerie.ScenarioDimension.htm)


		 Свойство ScenarioDimension
		 возвращает сценарное измерение ряда.


		 ![](../../Property_Image.gif)
		 [SelectedUnit](ILanerSerie.SelectedUnit.htm)


		 Свойство SelectedUnit
		 определяет единицы измерения, в которых отображаются данные ряда.


		 ![](../../Property_Image.gif)
		 [StrictlyDefined](ILanerSerie.StrictlyDefined.htm)


		 Свойство StrictlyDefined
		 возвращает признак того, что определены все обязательные атрибуты
		 ряда.


		 ![](../../Property_Image.gif)
		 [Stub](ILanerSerie.Stub.htm)


		 Свойство Stub возвращает
		 источник данных ряда.


		 ![](../../Property_Image.gif)
		 [UserName](ILanerSerie.UserName.htm)


		 Свойство UserName
		 определяет, задал ли пользователь наименование временного ряда.


		 ![](../../Property_Image.gif)
		 [Visible](ILanerSerie.Visible.htm)


		 Свойство Visible
		 определяет, видим ли ряд в рабочей книге.


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


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [MoveToParent](ILanerSerie.MoveToParent.htm)


		 Метод MoveToParent
		 осуществляет перемещение ряда в указанную группу рядов.


		 ![](../../Sub_Image.gif)
		 [SearchFactor](ILanerSerie.SearchFactor.htm)


		 Метод SearchFactor
		 осуществляет поиск в базе данных временных рядов ряда с такими
		 же значениями обязательных атрибутов, как и у текущего.


См. также:


[Интерфейсы сборки Laner](../Laner_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
