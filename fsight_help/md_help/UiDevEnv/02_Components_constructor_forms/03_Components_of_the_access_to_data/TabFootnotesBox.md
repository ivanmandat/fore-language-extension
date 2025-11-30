# TabFootnotesBox: Компонент

TabFootnotesBox: Компонент
-


# TabFootnotesBox


## Иерархия наследования


           [IComponent](ModForms.chm::/Interface/IComponent/IComponent.htm)


           [IControl](ModForms.chm::/Interface/IControl/IControl.htm)


           [ITabFootnotesBox](TabSheet.chm::/Interface/ITabFootnotesBox/ITabFootnotesBox.htm)


           [TabFootnotesBox](TabSheet.chm::/Class/TabFootnotesBox/TabFootnotesBox.htm)


## Описание


Компонент TabFootnotesBox предназначен
 для отображения сносок, созданных для каких-либо данных в таблицах различных
 инструментов продукта «Форсайт. Аналитическая платформа».


## Комментарии


Для работы компонента необходимо в свойстве [Source](TabSheet.chm::/Interface/ITabFootnotesBox/ITabFootnotesBox.Source.htm) указать
 источник, в котором настроены сноски. В качестве источника данных могут
 выступать следующие компоненты:


	- [UiErAnalyzer](UiErAnalyzer.htm);


	- [UiTabSheet](UiTabSheet.htm);


	- [UiReport](UiReport.htm).


В текущей реализации настройка сносок доступна только с помощью кода
 на Fore. Сноски могут быть настроены в таблице (доступ предоставляет свойство
 [ITabSheet.Footnotes](TabSheet.chm::/Interface/ITabSheet/ITabSheet.Footnotes.htm))
 или непосредственно в инструменте продукта «Форсайт. Аналитическая платформа»
 следующим образом:


[![](../../Opened.gif)![](../../Closed.gif)Настройки в
 экспресс-отчёте](javascript:TextPopup(this))


	При работе с экспресс-отчётами сноски могут быть настроены путем
	 задания отметки для метрики таблицы [EaxGridIndicatorType.Footnote](KeExpress.chm::/Enums/EaxGridIndicatorType.htm)
	 в свойстве [IEaxObject.IndicatorSelection](KeExpress.chm::/Interface/IEaxObject/IEaxObject.IndicatorSelection.htm):


		Sub UserProc;

		Var

		    MB: IMetabase;

		    Eax: IEaxAnalyzer;

		    Grid: IEaxGrid;

		Begin

		    MB := MetabaseClass.Active;

		    Eax := MB.ItemById("ExspressReport").Edit As IEaxAnalyzer;

		    Grid := Eax.Grid;

		    // Включение и настройка панели со сносками

		    Grid.FootnotePanelOptions.Position := BarDockingEdge.Bottom;

		    Grid.TabSheet.Footnotes.BackgroundBrush := New GxSolidBrush.Create(GxColor.FromKnownColor(GxKnownColor.Gold));

		    // Отметка элемента, по которому значения будут выступать в качестве сносок

		    Grid.IndicatorSelection(EaxGridIndicatorType.Footnote).SelectElement(0, False);

		    (Eax As IMetabaseObject).Save

		End Sub UserProc;


	При выполнении примера в экспресс-отчёте будет включено отображение
	 панели со сносками. В качестве сносок будут выступать значения по
	 первому элементу измерения метрик.


[![](../../Opened.gif)![](../../Closed.gif)Настройки в
 рабочей книге](javascript:TextPopup(this))


	В рабочих книгах сноски формируются отдельно для заголовков рядов
	 и области данных путем выбора атрибутов, значения которых будут выступать
	 в качестве текста сносок. Атрибуты задаются в свойствах [ILaner.SerieFootnoteAttributes](Laner.chm::/Interface/ILaner/ILaner.SerieFootnoteAttributes.htm)
	 (сноски для заголовков рядов) и [ILaner.ValueFootnoteAttributes](Laner.chm::/Interface/ILaner/ILaner.ValueFootnoteAttributes.htm)
	 (сноски для области данных).


		Sub UserProc;

		Var

		    MB: IMetabase;

		    Wbk: IEaxAnalyzer;

		    Grid: IEaxGrid;

		    Laner: ILaner;

		    FootnoteAttributes: ILanerCellAttributes;

		Begin

		    MB := MetabaseClass.Active;

		    Wbk := MB.ItemById("Workbook").Edit As IEaxAnalyzer;

		    Grid := Wbk.Grid;

		    // Включение и настройка панели со сносками

		    Grid.FootnotePanelOptions.Position := BarDockingEdge.Bottom;

		    Grid.TabSheet.Footnotes.BackgroundBrush := New GxSolidBrush.Create(GxColor.FromKnownColor(GxKnownColor.Gold));

		    Laner := Wbk.Laner;

		    // Получаем коллекцию атрибутов сносок для заголовков рядов

		    FootnoteAttributes := Laner.SerieFootnoteAttributes;

		    // Очищаем коллекцию

		    FootnoteAttributes.Clear;

		    // Добавляем атрибут "DL" в коллекцию атрибутов сносок

		    FootnoteAttributes.Add("DL", LnAttributeType.Fact);

		    // Сохраняем изменения

		    (Wbk As IMetabaseObject).Save;

		End Sub UserProc;


	При выполнении примера в рабочей книге будет включено отображение
	 панели со сносками. В качестве сносок для рядов будут выступать значения
	 атрибута Динамика (DL).


[![](../../Opened.gif)![](../../Closed.gif)Настройки в
 аналитической области данных](javascript:TextPopup(this))


	При работе с аналитической областью данных (настраивается для источников
	 в экспресс-отчетах и регламентных отчетах) сноски могут быть сформированы
	 путем задания метрики таблицы [EaxGridIndicatorType.Footnote](KeExpress.chm::/Enums/EaxGridIndicatorType.htm)
	 в свойстве [IEaxObject.IndicatorSelection](KeExpress.chm::/Interface/IEaxObject/IEaxObject.IndicatorSelection.htm).
	 Таблицу можно получить с помощью свойств и методов коллекции представлений
	 аналитической области данных - [IEaxDataAreaViews](KeExpress.chm::/Interface/IEaxDataAreaViews/IEaxDataAreaViews.htm):


		Sub UserProc;

		Var

		    MB: IMetabase;

		    Report: IPrxReport;

		    Slice: IEaxDataAreaSlice;

		    Grid: IEaxObject;

		Begin

		    MB := MetabaseClass.Active;

		    Report := MB.ItemById("REGULAR_REPORT").Edit As IPrxReport;

		    // Включение и настройка панели со сносками

		    Report.Options.FootnotePanelOptions.Position := BarDockingEdge.Bottom;

		    (Report.ActiveSheet As IPrxTable).TabSheet.Footnotes.BackgroundBrush := New GxSolidBrush.Create(GxColor.FromKnownColor(GxKnownColor.Gold));

		    // Отметка элемента, по которому значения будут выступать в качестве сносок

		    Slice := Report.DataArea.Slices.Item(0);

		    Grid := Slice.Views.Item(0);

		    Grid.IndicatorSelection(EaxGridIndicatorType.Footnote).SelectElement(1, True);

		    (Report As IMetabaseObject).Save;

		End Sub UserProc;


При выполнении примера в регламентном отчёте будет включено отображение
	 панели со сносками. Сноски будут добавлены в первом срезе аналитической
	 области данных. В качестве сносок будут выступать значения по первому
	 элементу измерения метрик.


Примечание.
 Сноски, настроенные в инструментах имеют больший приоритет, чем сноски,
 настроенные непосредственно в таблице. Необходимо это учитывать, так как
 при изменении отображаемых данных сноски, настроенные в таблице, могут
 быть сброшены.


## Пример


![](TabFootnotesBox_Sample.gif)


## Свойства компонента TabFootnotesBox


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Align](ModForms.chm::/Interface/IControl/IControl.Align.htm)


		 Свойство Align определяет,
		 как поведет себя компонент при изменении размеров содержащего
		 его родительского компонента.


		 ![](../../Property_Image.gif)
		 [AllowDrag](ModForms.chm::/Interface/IControl/IControl.AllowDrag.htm)


		 Свойство AllowDrag
		 определяет возможность взять у компонента перетаскиваемый объект.


		 ![](../../Property_Image.gif)
		 [AllowDrop](ModForms.chm::/Interface/IControl/IControl.AllowDrop.htm)


		 Свойство AllowDrop
		 определяет, будет ли возможность у компонента принять перетаскиваемый
		 объект.


		 ![](../../Property_Image.gif)
		 [Anchors](ModForms.chm::/Interface/IControl/IControl.Anchors.htm)


		 Свойство Anchors возвращает
		 настройки, определяющие в процентном соотношении изменение размеров
		 текущего компонента при изменении размеров родительского компонента.


		 ![](../../Property_Image.gif)
		 [Brush](ModForms.chm::/Interface/IControl/IControl.Brush.htm)
		 Свойство Brush определяет
		 кисть, используемую для заливки области компонента.


		 ![](../../Property_Image.gif)
		 [ClientHeight](ModForms.chm::/Interface/IControl/IControl.ClientHeight.htm)


		 Свойство ClientHeight
		 используется для получения или задания высоты клиентской области
		 компонента.


		 ![](../../Property_Image.gif)
		 [ClientWidth](ModForms.chm::/Interface/IControl/IControl.ClientWidth.htm)


		 Свойство ClientWidth
		 используется для получения или задания ширины клиентской области
		 компонента.


		 ![](../../Property_Image.gif)
		 [Color](ModForms.chm::/Interface/IControl/IControl.Color.htm)


		 Свойство Color определяет
		 цвет фона компонента.


		 ![](../../Property_Image.gif)
		 [Columns](ModForms.chm::/Interface/IListBox/IListBox.Columns.htm)
		 Свойство Columns определяет
		 количество столбцов, в которых будут отображаться элементы (строки)
		 списка.


		 ![](../../Property_Image.gif)
		 [ComponentCount](ModForms.chm::/Interface/IComponent/IComponent.ComponentCount.htm)


		 Свойство ComponentCount
		 возвращает количество дочерних компонентов.


		 ![](../../Property_Image.gif)
		 [Components](ModForms.chm::/Interface/IComponent/IComponent.Components.htm)


		 Свойство Components
		 возвращает дочерний компонент.


		 ![](../../Property_Image.gif)
		 [Cursor](ModForms.chm::/Interface/IControl/IControl.Cursor.htm)


		 Свойство Cursor определяет
		 вид курсора над компонентом.


		 ![](../../Property_Image.gif)
		 [Data](ModForms.chm::/Interface/IComponent/IComponent.Data.htm)


		 Свойство Data предназначено
		 для хранения любых пользовательских данных.


		 ![](../../Property_Image.gif)
		 [Enabled](ModForms.chm::/Interface/IControl/IControl.Enabled.htm)


		 Свойство Enabled определяет
		 доступность компонента для пользователя.


		 ![](../../Property_Image.gif)
		 [Focused](ModForms.chm::/Interface/IControl/IControl.Focused.htm)


		 Свойство Focused возвращает
		 True, если фокус установлен
		 на данном компоненте.


		 ![](../../Property_Image.gif)
		 [Font](ModForms.chm::/Interface/IControl/IControl.Font.htm)


		 Свойство Font определяет
		 множество характеристик, описывающих шрифт, используемый при отображении
		 текста.


		 ![](../../Property_Image.gif)
		 [Height](ModForms.chm::/Interface/IControl/IControl.Height.htm)


		 Свойство Height определяет
		 высоту компонента.


		 ![](../../Property_Image.gif)
		 [HelpContext](ModForms.chm::/Interface/IControl/IControl.HelpContext.htm)
		 Свойство HelpContext
		 определяет уникальный индекс раздела контекстно-зависимой справки
		 для данного компонента.


		 ![](../../Property_Image.gif)
		 [Hint](ModForms.chm::/Interface/IControl/IControl.Hint.htm)
		 Свойство Hint определяет
		 текст подсказки для компонента.


		 ![](../../Property_Image.gif)
		 [HintTimeout](ModForms.chm::/Interface/IControl/IControl.HintTimeout.htm)


		 Свойство HintTimeout
		 определяет время отображения всплывающей подсказки.


		 ![](../../Property_Image.gif)
		 [Left](ModForms.chm::/Interface/IControl/IControl.Left.htm)


		 Свойство Left определяет
		 координату левого края компонента.


		 ![](../../Property_Image.gif)
		 [Name](ModForms.chm::/Interface/IComponent/IComponent.Name.htm)
		 Свойство Name определяет
		 наименование компонента.


		 ![](../../Property_Image.gif)
		 [Parent](ModForms.chm::/Interface/IControl/IControl.Parent.htm)


		 Свойство Parent определяет
		 родительский компонент.


		 ![](../../Property_Image.gif)
		 [ParentColor](ModForms.chm::/Interface/IControl/IControl.ParentColor.htm)


		 Свойство ParentColor
		 определяет, будет ли для компонента заимствован цвет родительского
		 компонента.


		 ![](../../Property_Image.gif)
		 [ParentFont](ModForms.chm::/Interface/IControl/IControl.ParentFont.htm)


		 Свойство ParentFont
		 определяет, будет ли для компонента использоваться шрифт родительского
		 компонента.


		 ![](../../Property_Image.gif)
		 [ParentShowHint](ModForms.chm::/Interface/IControl/IControl.ParentShowHint.htm)


		 Свойство ParentShowHint
		 определяет условие отображения всплывающей подсказки.


		 ![](../../Property_Image.gif)
		 [PopupMenu](ModForms.chm::/Interface/IControl/IControl.PopupMenu.htm)


		 Свойство PopupMenu
		 определяет контекстное меню, которое будет появляться по щелчку
		 дополнительной кнопки мыши на компоненте.


		 ![](../../Property_Image.gif)
		 [ShowHint](ModForms.chm::/Interface/IControl/IControl.ShowHint.htm)


		 Свойство ShowHint включает
		 и выключает показ всплывающего окна подсказки для компонента.


		 ![](../../Property_Image.gif)
		 [Source](TabSheet.chm::/Interface/ITabFootnotesBox/ITabFootnotesBox.Source.htm)


		 Свойство Source определяет
		 источник данных для компонента.


		 ![](../../Property_Image.gif)
		 [TabOrder](ModForms.chm::/Interface/IControl/IControl.TabOrder.htm)


		 Свойство TabOrder определяет
		 позицию компонента в последовательности табуляции.


		 ![](../../Property_Image.gif)
		 [TabStop](ModForms.chm::/Interface/IControl/IControl.TabStop.htm)


		 Свойство TabStop определяет
		 признак необходимости компоненту получать фокус при нажатии кнопки
		 «Tab».


		 ![](../../Property_Image.gif)
		 [Tag](ModForms.chm::/Interface/IComponent/IComponent.Tag.htm)
		 Свойство Tag не используется
		 компилятором. Пользователь может изменить значение свойства Tag и использовать его по своему
		 усмотрению.


		 ![](../../Property_Image.gif)
		 [Text](ModForms.chm::/Interface/IControl/IControl.Text.htm)
		 Свойство Text определяет
		 строку, идентифицирующую компонент для пользователя.


		 ![](../../Property_Image.gif)
		 [Top](ModForms.chm::/Interface/IControl/IControl.Top.htm)
		 Свойство Top определяет
		 координату верхнего края компонента.


		 ![](../../Property_Image.gif)
		 [Visible](ModForms.chm::/Interface/IControl/IControl.Visible.htm)
		 Свойство Visible определяет
		 видимость компонента во время выполнения.


		 ![](../../Property_Image.gif)
		 [Width](ModForms.chm::/Interface/IControl/IControl.Width.htm)
		 Свойство Width определяет
		 ширину компонента.


## Методы компонента TabFootnotesBox


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [ClientToScreen](ModForms.chm::/Interface/IControl/IControl.ClientToScreen.htm)


		 Метод ClientToScreen
		 преобразовывает координаты точки, указанные относительно системы
		 координат компонента, в экранные координаты.


		 ![](../../Sub_Image.gif)
		 [DoDragDrop](ModForms.chm::/Interface/IControl/IControl.DoDragDrop.htm)


		 Метод DoDragDrop позволяет
		 начать операцию перетаскивания.


		 ![](../../Sub_Image.gif)
		 [GetImage](ModForms.chm::/Interface/IControl/IControl.GetImage.htm)


		 Метод GetImage возвращает
		 изображение компонента со всеми дочерними компонентами.


		 ![](../../Sub_Image.gif)
		 [ScreenToClient](ModForms.chm::/Interface/IControl/IControl.ScreenToClient.htm)


		 Метод ScreenToClient
		 преобразовывает экранные координаты точки в координаты, указываемые
		 относительно системы координат компонента.


		 ![](../../Sub_Image.gif)
		 [SetFocus](ModForms.chm::/Interface/IControl/IControl.SetFocus.htm)


		 Метод SetFocus устанавливает
		 фокус на данный компонент.


## События компонента TabFootnotesBox


		 Имя события
		 Краткое описание


		 ![](../../Event_Image.gif)
		 [OnBeginDrag](ModForms.chm::/Interface/IControl/IControl.OnBeginDrag.htm)


		 Событие OnBeginDrag
		 для компонента наступает, когда пользователь начинает перетаскивать
		 объект от компонента.


		 ![](../../Event_Image.gif)
		 [OnClick](ModForms.chm::/Interface/IControl/IControl.OnClick.htm)


		 Событие OnClick наступает,
		 если пользователь щёлкнул в области компонента.


		 ![](../../Event_Image.gif)
		 [OnControlMove](ModForms.chm::/Interface/IControl/IControl.OnControlMove.htm)


		 Событие OnControlMove
		 наступает при перемещении компонента.


		 ![](../../Event_Image.gif)
		 [OnControlResize](ModForms.chm::/Interface/IControl/IControl.OnControlResize.htm)


		 Событие OnControlResize
		 наступает при изменении размеров у компонента.


		 ![](../../Event_Image.gif)
		 [OnDblClick](ModForms.chm::/Interface/IControl/IControl.OnDblClick.htm)


		 Событие OnDblClick
		 наступает, если пользователь дважды щёлкнул в области компонента.


		 ![](../../Event_Image.gif)
		 [OnDragDrop](ModForms.chm::/Interface/IControl/IControl.OnDragDrop.htm)


		 Событие OnDragDrop
		 для компонента наступает, когда пользователь отпускает над ним
		 перетаскиваемый объект.


		 ![](../../Event_Image.gif)
		 [OnDragEnter](ModForms.chm::/Interface/IControl/IControl.OnDragEnter.htm)


		 Событие OnDragEnter
		 наступает, когда перетаскиваемый объект входит в границы данного
		 компонента.


		 ![](../../Event_Image.gif)
		 [OnDragLeave](ModForms.chm::/Interface/IControl/IControl.OnDragLeave.htm)


		 Событие OnDragLeave
		 наступает, когда перетаскиваемый объект выходит за границы данного
		 компонента.


		 ![](../../Event_Image.gif)
		 [OnDragOver](ModForms.chm::/Interface/IControl/IControl.OnDragOver.htm)


		 Событие OnDragOver
		 для компонента наступает, когда пользователь протаскивает над
		 ним перетаскиваемый объект.


		 ![](../../Event_Image.gif)
		 [OnEnter](ModForms.chm::/Interface/IControl/IControl.OnEnter.htm)


		 Событие OnEnter наступает
		 в момент получения фокуса компонентом.


		 ![](../../Event_Image.gif)
		 [OnExit](ModForms.chm::/Interface/IControl/IControl.OnExit.htm)


		 Событие OnExit наступает
		 в момент потери фокуса компонентом.


		 ![](../../Event_Image.gif)
		 [OnHScroll](ModForms.chm::/Interface/IControl/IControl.OnHScroll.htm)


		 Событие OnHScroll наступает
		 при изменении положения ползунка горизонтальной полосы прокрутки.


		 ![](../../Event_Image.gif)
		 [OnKeyDown](ModForms.chm::/Interface/IControl/IControl.OnKeyDown.htm)


		 Событие OnKeyDown наступает,
		 если компонент находится в фокусе и производится нажатие на клавиатуру.


		 ![](../../Event_Image.gif)
		 [OnKeyPress](ModForms.chm::/Interface/IControl/IControl.OnKeyPress.htm)


		 Событие OnKeyPress
		 наступает, если компонент находится в фокусе, при нажатии пользователем
		 символьной клавиши.


		 ![](../../Event_Image.gif)
		 [OnKeyPreview](ModForms.chm::/Interface/IControl/IControl.OnKeyPreview.htm)


		 Событие OnKeyPreview
		 наступает перед каждым событием, связанным с нажатием клавиш.


		 ![](../../Event_Image.gif)
		 [OnKeyUp](ModForms.chm::/Interface/IControl/IControl.OnKeyUp.htm)


		 Событие OnKeyUp наступает,
		 если компонент находится в фокусе, при отпускании пользователем
		 любой, ранее нажатой клавиши.


		 ![](../../Event_Image.gif)
		 [OnMouseDown](ModForms.chm::/Interface/IControl/IControl.OnMouseDown.htm)


		 Событие OnMouseDown
		 наступает, если компонент находится в фокусе, и на компоненте
		 произведено нажатие любой из кнопок мыши.


		 ![](../../Event_Image.gif)
		 [OnMouseEnter](ModForms.chm::/Interface/IControl/IControl.OnMouseEnter.htm)
		 Событие OnMouseEnter
		 наступает в момент входа курсора мыши в область компонента.


		 ![](../../Event_Image.gif)
		 [OnMouseHover](ModForms.chm::/Interface/IControl/IControl.OnMouseHover.htm)
		 Событие OnMouseHover
		 наступает при задержке курсора мыши в области компонента.


		 ![](../../Event_Image.gif)
		 [OnMouseLeave](ModForms.chm::/Interface/IControl/IControl.OnMouseLeave.htm)
		 Событие OnMouseLeave
		 наступает в момент выхода курсора мыши за пределы области компонента.


		 ![](../../Event_Image.gif)
		 [OnMouseMove](ModForms.chm::/Interface/IControl/IControl.OnMouseMove.htm)


		 Событие OnMouseMove
		 наступает при перемещении пользователем курсора мыши над компонентом.


		 ![](../../Event_Image.gif)
		 [OnMouseUp](ModForms.chm::/Interface/IControl/IControl.OnMouseUp.htm)


		 Событие OnMouseUp наступает,
		 если компонент находится в фокусе и на компоненте была отпущена
		 любая из ранее нажатых кнопок мыши.


		 ![](../../Event_Image.gif)
		 [OnMouseWheel](ModForms.chm::/Interface/IControl/IControl.OnMouseWheel.htm)


		 Событие OnMouseWheel
		 наступает, если компонент находится в фокусе при вращении колеса
		 мыши.


		 ![](../../Event_Image.gif)
		 [OnVScroll](ModForms.chm::/Interface/IControl/IControl.OnVScroll.htm)


		 Событие OnVScroll наступает
		 при изменении положения ползунка вертикальной полосы прокрутки.


См. также:


[Компоненты
 доступа к данным](03_components_of_the_access_to_data.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
