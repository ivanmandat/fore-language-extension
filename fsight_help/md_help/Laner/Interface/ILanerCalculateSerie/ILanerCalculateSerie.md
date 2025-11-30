# ILanerCalculateSerie

ILanerCalculateSerie
-


# ILanerCalculateSerie


Сборка: Laner;


## Описание


Интерфейс ILanerCalculateSerie
 содержит свойства и методы, предназначенные для работы с вычисляемым рядом.


## Иерархия наследования


           [INamedEntity](KeSom.chm::/Interface/INamedEntity/INamedEntity.htm)


           [ILanerSerie](../ILanerSerie/ILanerSerie.htm)


           [ILanerGroupSerie](../ILanerGroupSerie/ILanerGroupSerie.htm)


           ILanerCalculateSerie


## Комментарии


Для вычисляемого ряда обязательно должно быть задано свойство [ILanerCalculateSerie.Transform](ILanerCalculateSerie.Transform.htm), задающее
 параметры расчета ряда.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CreateDerivedSeries](ILanerCalculateSerie.CreateDerivedSeries.htm)
		 Свойство CreateDerivedSeries
		 определяет, добавлять ли в качестве дочерних вычисленные ряды
		 («Модельный ряд», «Остатки» и т.д.).


		 ![](../../Property_Image.gif)
		 [DisplayDataAs](ILanerCalculateSerie.DisplayDataAs.htm)
		 Свойство DisplayDataAs
		 определяет режим отображения значений для вычисляемого ряда.


		 ![](../../Property_Image.gif)
		 [HasDiscrepancies](ILanerCalculateSerie.HasDiscrepancies.htm)
		 Свойство HasDiscrepancies
		 возвращает признак того, отличаются ли рассчитанные данные ряда
		 от данных, хранящихся в БД.


		 ![](../../Property_Image.gif)
		 [Model](ILanerCalculateSerie.Model.htm)
		 Свойство Model определяет
		 модель, в которую был сохранен или из которой был восстановлен
		 ряд.


		 ![](../../Property_Image.gif)
		 [RevisionKey](ILanerCalculateSerie.RevisionKey.htm)
		 Свойство RevisionKey
		 возвращает ключ ревизии, в которой был создан вычисляемый ряд.


		 ![](../../Property_Image.gif)
		 [ScenarioKey](ILanerCalculateSerie.ScenarioKey.htm)
		 Свойство ScenarioKey
		 определяет ключ сценария, данные которого содержит ряд.


		 ![](../../Property_Image.gif)
		 [Source](ILanerCalculateSerie.Source.htm)
		 Свойство Source определяет
		 источник вычисляемого ряда.


		 ![](../../Property_Image.gif)
		 [SourceStub](ILanerCalculateSerie.SourceStub.htm)
		 Свойство SourceStub
		 возвращает данные ряда, как абстрактного источника данных.


		 ![](../../Property_Image.gif)
		 [Transform](ILanerCalculateSerie.Transform.htm)
		 Свойство Transform
		 возвращает объект, позволяющий настроить параметры вычисляемого
		 ряда.


		 ![](../../Property_Image.gif)
		 [TransformPeriod](ILanerCalculateSerie.TransformPeriod.htm)
		 Свойство TransformPeriod
		 возвращает параметры периода расчёта вычисляемого ряда.


		 ![](../../Property_Image.gif)
		 [UserFormat](ILanerCalculateSerie.UserFormat.htm)
		 Свойство UserFormat
		 определяет формат наименования для вычисляемого ряда.


		 ![](../../Property_Image.gif)
		 [UseTransform](ILanerCalculateSerie.UseTransform.htm)
		 Свойство UseTransform
		 определяет, использовать ли параметры вычисления ряда.


## Свойства, унаследованные от [ILanerGroupSerie](../ILanerGroupSerie/ILanerGroupSerie.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CanAddChildren](../ILanerGroupSerie/ILanerGroupSerie.CanAddChildren.htm)


		 Свойство CanAddChildren
		 возвращает признак того, возможно ли добавление дочернего ряда
		 в группу рядов.


		 ![](../../Property_Image.gif)
		 [Children](../ILanerGroupSerie/ILanerGroupSerie.Children.htm)


		 Свойство Children возвращает
		 ряды, образующие группу.


		 ![](../../Property_Image.gif)
		 [Expanded](../ILanerGroupSerie/ILanerGroupSerie.Expanded.htm)


		 Свойство Expanded определяет
		 состояние группы рядов.


## Свойства, унаследованные от [ILanerSerie](../ILanerSerie/ILanerSerie.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CalendarDim](../ILanerSerie/ILanerSerie.CalendarDim.htm)


		 Свойство CalendarDim
		 возвращает календарь ряда.


		 ![](../../Property_Image.gif)
		 [Dependencies](../ILanerSerie/ILanerSerie.Dependencies.htm)


		 Свойство Dependencies
		 возвращает ряды, входящие в данный ряд.


		 ![](../../Property_Image.gif)
		 [Dependents](../ILanerSerie/ILanerSerie.Dependents.htm)


		 Свойство Dependents
		 возвращает ряды, в которые данный ряд входит.


		 ![](../../Property_Image.gif)
		 [DisplayParams](../ILanerSerie/ILanerSerie.DisplayParams.htm)


		 Свойство DisplayParams
		 возвращает параметры отображения данных ряда.


		 ![](../../Property_Image.gif)
		 [Hidden](../ILanerSerie/ILanerSerie.Hidden.htm)


		 Свойство Hidden
		 определяет, скрыт ли ряд в рабочей книге.


		 ![](../../Property_Image.gif)
		 [Hint](../ILanerSerie/ILanerSerie.Hint.htm)


		 Свойство Hint определяет
		 текст всплывающей подсказки для ряда данных.


		 ![](../../Property_Image.gif)
		 [IsChanged](../ILanerSerie/ILanerSerie.IsChanged.htm)


		 Свойство IsChanged
		 возвращает признак наличия изменений в данных ряда.


		 ![](../../Property_Image.gif)
		 [Kind](../ILanerSerie/ILanerSerie.Kind.htm)


		 Свойство Kind возвращает
		 тип ряда.


		 ![](../../Property_Image.gif)
		 [Laner](../ILanerSerie/ILanerSerie.Laner.htm)


		 Свойство Laner возвращает
		 рабочую книгу базы данных временных рядов, содержащую данный ряд.


		 ![](../../Property_Image.gif)
		 [Level](../ILanerSerie/ILanerSerie.Level.htm)


		 Свойство Level возвращает
		 календарную динамику ряда.


		 ![](../../Property_Image.gif)
		 [MetaAttributeValueList](../ILanerSerie/ILanerSerie.MetaAttributeValueList.htm)


		 Свойство MetaAttributeValueList
		 возвращает коллекцию значений атрибутов ряда.


		 ![](../../Property_Image.gif)
		 [ObservationAttributeInValue](../ILanerSerie/ILanerSerie.ObservationAttributeInValue.htm)


		 Свойство ObservationAttributeInValue
		 определяет наименование атрибута наблюдений, значения которого
		 отображаются в таблице рабочей книги.


		 ![](../../Property_Image.gif)
		 [ObservationValue](../ILanerSerie/ILanerSerie.ObservationValue.htm)


		 Свойство ObservationValue
		 определяет значение атрибута наблюдения показателя в заданной
		 календарной точке.


		 ![](../../Property_Image.gif)
		 [Parent](../ILanerSerie/ILanerSerie.Parent.htm)


		 Свойство Parent возвращает
		 группу, в которой содержится ряд.


		 ![](../../Property_Image.gif)
		 [ReadOnly](../ILanerSerie/ILanerSerie.ReadOnly.htm)


		 Свойство ReadOnly
		 определяет, доступен ли ряд только для чтения.


		 ![](../../Property_Image.gif)
		 [ScenarioDimension](../ILanerSerie/ILanerSerie.ScenarioDimension.htm)


		 Свойство ScenarioDimension
		 возвращает сценарное измерение ряда.


		 ![](../../Property_Image.gif)
		 [SelectedUnit](../ILanerSerie/ILanerSerie.SelectedUnit.htm)


		 Свойство SelectedUnit
		 определяет единицы измерения, в которых отображаются данные ряда.


		 ![](../../Property_Image.gif)
		 [StrictlyDefined](../ILanerSerie/ILanerSerie.StrictlyDefined.htm)


		 Свойство StrictlyDefined
		 возвращает признак того, что определены все обязательные атрибуты
		 ряда.


		 ![](../../Property_Image.gif)
		 [Stub](../ILanerSerie/ILanerSerie.Stub.htm)


		 Свойство Stub возвращает
		 источник данных ряда.


		 ![](../../Property_Image.gif)
		 [UserName](../ILanerSerie/ILanerSerie.UserName.htm)


		 Свойство UserName
		 определяет, задал ли пользователь наименование временного ряда.


		 ![](../../Property_Image.gif)
		 [Visible](../ILanerSerie/ILanerSerie.Visible.htm)


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
		 [ApplyFormulaOnce](ILanerCalculateSerie.ApplyFormulaOnce.htm)
		 Метод ApplyFormulaOnce
		 выполняет однократный расчет вычисляемого ряда по заданным параметрам.


		 ![](../../Sub_Image.gif)
		 [Calculate](ILanerCalculateSerie.Calculate.htm)
		 Метод Calculate осуществляет
		 расчет вычисляемого ряда.


		 ![](../../Sub_Image.gif)
		 [CreateFactor](ILanerCalculateSerie.CreateFactor.htm)
		 Метод CreateFactor
		 создает показатель на основе вычисляемого ряда.


		 ![](../../Sub_Image.gif)
		 [CreateTemporaryTransform](ILanerCalculateSerie.CreateTemporaryTransform.htm)
		 Метод CreateTemporaryTransform
		 создает временный объект, позволяющий настроить параметры расчета
		 вычисляемого ряда.


		 ![](../../Sub_Image.gif)
		 [Error](ILanerCalculateSerie.Error.htm)
		 Метод Error осуществляет
		 вывод ошибок, возникших при расчете ряда.


		 ![](../../Sub_Image.gif)
		 [IndexOfDerivedType](ILanerCalculateSerie.IndexOfDerivedType.htm)
		 Метод IndexOfDerivedType
		 возвращает индекс дочернего ряда указанного типа.


		 ![](../../Sub_Image.gif)
		 [RefreshData](ILanerCalculateSerie.RefreshData.htm)
		 Метод RefreshData обновляет
		 данные ряда.


		 ![](../../Sub_Image.gif)
		 [ReleaseValues](ILanerCalculateSerie.ReleaseValues.htm)
		 Метод ReleaseValues
		 устанавливает для точек ряда режим отображения, при котором в
		 рабочей книге отображаются рассчитанные значения точек.


		 ![](../../Sub_Image.gif)
		 [Save](ILanerCalculateSerie.Save.htm)
		 Метод Save осуществляет
		 сохранение ряда и возвращает ревизию, в которую вошли сделанные
		 изменения.


		 ![](../../Sub_Image.gif)
		 [SaveModel](ILanerCalculateSerie.SaveModel.htm)
		 Метод SaveModel сохраняет
		 вычисляемый ряд в виде модели.


## Методы, унаследованные от [ILanerSerie](../ILanerSerie/ILanerSerie.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [MoveToParent](../ILanerSerie/ILanerSerie.MoveToParent.htm)


		 Метод MoveToParent
		 осуществляет перемещение ряда в указанную группу рядов.


		 ![](../../Sub_Image.gif)
		 [SearchFactor](../ILanerSerie/ILanerSerie.SearchFactor.htm)


		 Метод SearchFactor
		 осуществляет поиск в базе данных временных рядов ряда с такими
		 же значениями обязательных атрибутов, как и у текущего.


См. также:


[Интерфейсы сборки Laner](../Laner_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
