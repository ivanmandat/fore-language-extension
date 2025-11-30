# UiChart: Класс

UiChart: Класс
-


# UiChart


## Описание


Класс UiChart содержит свойства,
 методы и события для определения внешнего вида графика.


## Свойства объекта класса, унаследованные от [IUiChart](../../Interface/IUiChart/IUiChart.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Chart](../../Interface/IUiChart/IUiChart.Chart.htm)


		 Свойство Chart возвращает
		 объект типа IChart, которому
		 принадлежит элемент графика.


		 ![](../../Property_Image.gif)
		 [DisplayLegend](../../Interface/IUiChart/IUiChart.DisplayLegend.htm)


		 Свойство DisplayLegend
		 определяет признак отображения легенды.


		 ![](../../Property_Image.gif)
		 [DisplaySecondaryAxis](../../Interface/IUiChart/IUiChart.DisplaySecondaryAxis.htm)


		 Свойство DisplaySecondaryAxis
		 определяет признак отображения дополнительной оси.


		 ![](../../Property_Image.gif)
		 [DisplayVolume3D](../../Interface/IUiChart/IUiChart.DisplayVolume3D.htm)


		 Свойство DisplayVolume3D
		 определяет признак отображения объемного вида диаграммы.


		 ![](../../Property_Image.gif)
		 [Orientation](../../Interface/IUiChart/IUiChart.Orientation.htm)


		 Свойство Orientation
		 определяет ориентацию диаграммы.


		 ![](../../Property_Image.gif)
		 [PointCount](../../Interface/IUiChart/IUiChart.PointCount.htm)


		 Свойство PointCount
		 определяет количество точек диаграммы.


		 ![](../../Property_Image.gif)
		 [SerieCount](../../Interface/IUiChart/IUiChart.SerieCount.htm)


		 Свойство SerieCount
		 определяет количество рядов диаграммы.


		 ![](../../Property_Image.gif)
		 [Style](../../Interface/IUiChart/IUiChart.Style.htm)


		 Свойство Style определяет
		 тип шкалы диаграммы.


		 ![](../../Property_Image.gif)
		 [Type](../../Interface/IUiChart/IUiChart.Type.htm)


		 Свойство Type определяет
		 тип диаграммы.


## Свойства объекта класса, унаследованные от [IComponent](ModForms.chm::/Interface/IComponent/IComponent.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ComponentCount](ModForms.chm::/Interface/IComponent/IComponent.ComponentCount.htm)


		 Свойство ComponentCount
		 возвращает количество дочерних компонентов, расположенных на родительском
		 компоненте.


		 ![](../../Property_Image.gif)
		 [Components](ModForms.chm::/Interface/IComponent/IComponent.Components.htm)


		 Свойство Components
		 возвращает дочерний компонент, индекс которого передается
		 посредством входного параметра.


		 ![](../../Property_Image.gif)
		 [Data](ModForms.chm::/Interface/IComponent/IComponent.Data.htm)


		 Свойство Data предназначено
		 для хранения любых пользовательских данных.


		 ![](../../Property_Image.gif)
		 [Name](ModForms.chm::/Interface/IComponent/IComponent.Name.htm)


		 Свойство Name определяет
		 наименование компонента.


		 ![](../../Property_Image.gif)
		 [Tag](ModForms.chm::/Interface/IComponent/IComponent.Tag.htm)


		 Свойство Tag не используется
		 компилятором. Пользователь может изменить значение данного свойства
		 и использовать его по своему усмотрению.


## Методы объекта класса, унаследованные от [IUiChart](../../Interface/IUiChart/IUiChart.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [SetPointSerieCount](../../Interface/IUiChart/IUiChart.SetPointSerieCount.htm)


		 Метод SetPointSerieCount
		 позволяет задать количество рядов и точек на диаграмме.


## События


		 Имя события
		 Краткое описание


		 ![](../../Event_Image.gif)
		 [OnGetDataValue](UiChart.OnGetDataValue.htm)


		 Событие OnGetDataValue
		 используется для построения графика.


		 ![](../../Event_Image.gif)
		 [OnGetGroupCount](UiChart.OnGetGroupCount.htm)


		 Событие OnGetGroupCount
		 позволяет определить количество групп диаграммы.


		 ![](../../Event_Image.gif)
		 [OnGetGroupName](UiChart.OnGetGroupName.htm)


		 Событие OnGetGroupName
		 позволяет определить наименование группы диаграммы.


		 ![](../../Event_Image.gif)
		 [OnGetCategoryFormat](UiChart.OnGetCategoryFormat.htm)


		 Событие OnGetCategoryFormat
		 позволяет определить формат наименования точек для оси категорий.


		 ![](../../Event_Image.gif)
		 [OnGetCategoryName](UiChart.OnGetCategoryName.htm)


		 Событие OnGetCategoryName
		 позволяет определить наименование точек для оси категорий.


		 ![](../../Event_Image.gif)
		 [OnGetLabelText](UiChart.OnGetLabelText.htm)


		 Событие OnGetLabelText
		 позволяет определить пользовательский формат данных, отображенных
		 в подписях данных.


		 ![](../../Event_Image.gif)
		 [OnGetParentSerieIndex](UiChart.OnGetParentSerieIndex.htm)


		 Событие OnGetParentSerieIndex
		 позволяет определить индекс родительского ряда.


		 ![](../../Event_Image.gif)
		 [OnGetPointName](UiChart.OnGetPointName.htm)


		 Событие OnGetPointName
		 позволяет определить наименование точек на графике.


		 ![](../../Event_Image.gif)
		 [OnGetPointNameRoot](UiChart.OnGetPointNameRoot.htm)


		 Событие OnGetPointNameRoot
		 позволяет определить корневой элемент для иерархии наименований
		 оси категорий.


		 ![](../../Event_Image.gif)
		 [OnGetRelativeSerieEnabled](UiChart.OnGetRelativeSerieEnabled.htm)


		 Событие OnGetRelativeSerieEnabled
		 позволяет определить, будут ли использоваться относительные ряды.


		 ![](../../Event_Image.gif)
		 [OnGetSerieGroupIndex](UiChart.OnGetSerieGroupIndex.htm)


		 Событие OnGetSerieGroupIndex
		 позволяет определить индекс группы рядов диаграммы.


		 ![](../../Event_Image.gif)
		 [OnGetSerieGroupName](UiChart.OnGetSerieGroupName.htm)


		 Событие OnGetSerieGroupName
		 позволяет определить наименование группы рядов диаграммы.


		 ![](../../Event_Image.gif)
		 [OnGetSerieName](UiChart.OnGetSerieName.htm)


		 Событие OnGetSerieName
		 позволяет определить наименование рядов. Событие наступает при
		 отрисовке графика.


		 ![](../../Event_Image.gif)
		 [OnGetToolTip](UiChart.OnGetToolTip.htm)


		 Событие OnGetToolTip
		 определяет параметры всплывающих подсказок на точках диаграммы,
		 подсказки появляются при наведении курсора мыши на точку.


		 ![](../../Event_Image.gif)
		 [OnSetDataValue](UiChart.OnSetDataValue.htm)


		 Событие OnSetDataValue
		 наступает при изменении значения точки ряда на графике.


См. также:


[Классы сборки Chart](../Chart_Klass_Chart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
