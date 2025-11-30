# UiChart: Компонент

UiChart: Компонент
-


# UiChart


## Иерархия наследования


           [IComponent](modforms.chm::/Interface/IComponent/IComponent.htm)


           [IUiChart](Chart.chm::/Interface/IUiChart/IUiChart.htm)


           [UiChart](Chart.chm::/Class/UiChart/UiChart.htm)


## Описание


Компонент UiChart является невизуальным
 и реализует диаграммы платформы.


## Работа с компонентом


После размещения компонента на форме для его использования выполните
 следующие действия:


	- В инспекторе объектов установите значения свойств [PointCount](Chart.chm::/Interface/IUiChart/IUiChart.PointCount.htm)
	 и [SerieCount](Chart.chm::/Interface/IUiChart/IUiChart.SerieCount.htm).


	- В свойстве [Type](Chart.chm::/Interface/IUiChart/IUiChart.Type.htm)
	 выберите тип диаграммы;


	- Для указания значений, которые будут иметь определенные точки
	 определенного ряда, создайте обработчик события [OnGetDataValue](Chart.chm::/Class/UiChart/UiChart.OnGetDataValue.htm):


	-


		- В свойствах аргумента события [Value](Chart.chm::/Interface/IUiChartGetDataValueEventArgs/IUiChartGetDataValueEventArgs.Value.htm) и [Value2](Chart.chm::/Interface/IUiChartGetDataValueEventArgs/IUiChartGetDataValueEventArgs.Value2.htm) укажите
		 значения для точек;


		- В свойстве аргумента события [Result](Chart.chm::/Interface/IUiChartCancelEventArgs/IUiChartCancelEventArgs.Rezult.htm) установите
		 значение True.


После этого компонент может быть указан в качестве источника данных
 для визуального компонента [ChartBox](ChartBox.htm).
 При запуске формы будет отображена диаграмма.


Используя различные дополнительные свойства компонента можно настроить
 оформление диаграммы. Обработав дополнительные события можно определить
 текст, отображаемый для каждого ряда и точек, текст всплывающей подсказки
 для рядов. В событии [OnSetDataValue](Chart.chm::/Class/UiChart/UiChart.OnSetDataValue.htm)
 можно отследить изменение данных в каждой точке.


В коде на Fore, используя свойство
 [Chart](Chart.chm::/Interface/IUiChart/IUiChart.Chart.htm),
 можно получить параметры диаграммы и произвести более детальную настройку.


## Свойства компонента UiChart


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Chart](Chart.chm::/Interface/IUiChart/IUiChart.Chart.htm)
		 Свойство Chart возвращает
		 параметры диаграммы.


		 ![](../../Property_Image.gif)
		 [ComponentCount](ModForms.chm::/Interface/IComponent/IComponent.ComponentCount.htm)
		 Свойство ComponentCount
		 возвращает количество дочерних компонентов.


		 ![](../../Property_Image.gif)
		 [Components](ModForms.chm::/Interface/IComponent/IComponent.Components.htm)
		 Свойство Components
		 возвращает дочерний компонент.


		 ![](../../Property_Image.gif)
		 [Data](ModForms.chm::/Interface/IComponent/IComponent.Data.htm)
		 Свойство Data предназначено
		 для хранения любых пользовательских данных.


		 ![](../../Property_Image.gif)
		 [DisplayLegend](Chart.chm::/Interface/IUiChart/IUiChart.DisplayLegend.htm)
		 Свойство DisplayLegend
		 определяет признак отображения легенды.


		 ![](../../Property_Image.gif)
		 [DisplaySecondaryAxis](Chart.chm::/Interface/IUiChart/IUiChart.DisplaySecondaryAxis.htm)
		 Свойство DisplaySecondaryAxis
		 определяет признак отображения дополнительной оси.


		 ![](../../Property_Image.gif)
		 [DisplayVolume3D](Chart.chm::/Interface/IUiChart/IUiChart.DisplayVolume3D.htm)
		 Свойство DisplayVolume3D
		 определяет признак отображения объемного вида диаграммы.


		 ![](../../Property_Image.gif)
		 [Name](ModForms.chm::/Interface/IComponent/IComponent.Name.htm)
		 Свойство Name определяет
		 наименование компонента.


		 ![](../../Property_Image.gif)
		 [Orientation](Chart.chm::/Interface/IUiChart/IUiChart.Orientation.htm)
		 Свойство Orientation
		 определяет ориентацию диаграммы.


		 ![](../../Property_Image.gif)
		 [PointCount](Chart.chm::/Interface/IUiChart/IUiChart.PointCount.htm)
		 Свойство PointCount
		 возвращает количество точек графика.


		 ![](../../Property_Image.gif)
		 [SerieCount](Chart.chm::/Interface/IUiChart/IUiChart.SerieCount.htm)
		 Свойство SerieCount
		 возвращает количество рядов графика.


		 ![](../../Property_Image.gif)
		 [Style](Chart.chm::/Interface/IUiChart/IUiChart.Style.htm)
		 Свойство Style определяет
		 тип шкалы диаграммы.


		 ![](../../Property_Image.gif)
		 [Tag](ModForms.chm::/Interface/IComponent/IComponent.Tag.htm)
		 Свойство Tag не используется
		 компилятором. Пользователь может изменить значение свойства Tag и использовать его по своему
		 усмотрению.


		 ![](../../Property_Image.gif)
		 [Type](Chart.chm::/Interface/IUiChart/IUiChart.Type.htm)
		 Свойство Type определяет
		 тип диаграммы.


## Методы компонента UiChart


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [SetPointSerieCount](Chart.chm::/Interface/IUiChart/IUiChart.SetPointSerieCount.htm)
		 Метод SetPointSerieCount
		 позволяет задать количество рядов и точек на диаграмме.


## События компонента UiChart


		 Имя события
		 Краткое описание


		 ![](../../Event_Image.gif)
		 [OnGetDataValue](Chart.chm::/Class/UiChart/UiChart.OnGetDataValue.htm)
		 Событие OnGetDataValue
		 используется для построения графика.


		 ![](../../Event_Image.gif)
		 [OnGetLabelText](Chart.chm::/Class/UiChart/UiChart.OnGetLabelText.htm)
		 Событие OnGetLabelText
		 позволяет определить пользовательский формат данных, отображенных
		 в метках.


		 ![](../../Event_Image.gif)
		 [OnGetPointName](Chart.chm::/Class/UiChart/UiChart.OnGetPointName.htm)
		 Событие OnGetPointName
		 позволяет определить наименование точек на графике.


		 ![](../../Event_Image.gif)
		 [OnGetSerieName](Chart.chm::/Class/UiChart/UiChart.OnGetSerieName.htm)
		 Событие OnGetSerieName
		 позволяет определить наименование рядов. Событие наступает при
		 отрисовке графика.


		 ![](../../Event_Image.gif)
		 [OnGetToolTip](Chart.chm::/Class/UiChart/UiChart.OnGetToolTip.htm)
		 Событие OnGetToolTip
		 определяет параметры всплывающих подсказок на точках диаграммы,
		 подсказки появляются при наведении курсора мыши на точку.


		 ![](../../Event_Image.gif)
		 [OnSetDataValue](Chart.chm::/Class/UiChart/UiChart.OnSetDataValue.htm)
		 Событие OnSetDataValue
		 наступает при изменении значения точки ряда на графике.


См. также:


[Компоненты доступа
 к данным](03_components_of_the_access_to_data.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
