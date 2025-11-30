# IControl

IControl
-


# IControl


Сборка: Forms;


## Описание


Интерфейс IControl является
 базовым и содержит основные свойства и методы всех визуальных компонентов
 конструктора пользовательских форм. Также все визуальные компоненты реализуют
 ряд событий, описание которых представлено в данном разделе.


## Иерархия наследования


           [IComponent](../IComponent/IComponent.htm)


           IControl


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Align](IControl.Align.htm)
		 Свойство Align определяет
		 выравнивание компонента в рамках содержащего его родительского
		 компонента.


		 ![](../../Property_Image.gif)
		 [AllowDrag](IControl.AllowDrag.htm)
		 Свойство AllowDrag
		 определяет возможность взять у компонента перетаскиваемый объект.


		 ![](../../Property_Image.gif)
		 [AllowDrop](IControl.AllowDrop.htm)
		 Свойство AllowDrop
		 определяет, будет ли возможность у компонента принять перетаскиваемый
		 объект.


		 ![](../../Property_Image.gif)
		 [Anchors](IControl.Anchors.htm)
		 Свойство Anchors возвращает
		 настройки, определяющие в процентном соотношении изменение размеров
		 текущего компонента при изменении размеров родительского компонента.


		 ![](../../Property_Image.gif)
		 [Brush](IControl.Brush.htm)
		 Свойство Brush определяет
		 кисть, используемую для заливки области компонента.


		 ![](../../Property_Image.gif)
		 [ClientHeight](IControl.ClientHeight.htm)
		 Свойство ClientHeight
		 определяет высоту клиентской области компонента.


		 ![](../../Property_Image.gif)
		 [ClientWidth](IControl.ClientWidth.htm)
		 Свойство ClientWidth
		 определяет ширину клиентской области компонента.


		 ![](../../Property_Image.gif)
		 [Color](IControl.Color.htm)
		 Свойство Color определяет
		 цвет фона компонента.


		 ![](../../Property_Image.gif)
		 [Cursor](IControl.Cursor.htm)
		 Свойство Cursor определяет
		 вид курсора, отображаемого при наведении курсора мыши на компонент,
		 во время выполнения формы.


		 ![](../../Property_Image.gif)
		 [Enabled](IControl.Enabled.htm)
		 Свойство Enabled определяет
		 доступность компонента для пользователя.


		 ![](../../Property_Image.gif)
		 [Focused](IControl.Focused.htm)
		 Свойство Focused возвращает
		 True, если фокус установлен
		 на данном компоненте.


		 ![](../../Property_Image.gif)
		 [Font](IControl.Font.htm)
		 Свойство Font определяет
		 параметры шрифта, используемого при отображении текста в компоненте.


		 ![](../../Property_Image.gif)
		 [Height](IControl.Height.htm)
		 Свойство Height определяет
		 высоту компонента в пикселях.


		 ![](../../Property_Image.gif)
		 [HelpContext](IControl.HelpContext.htm)
		 Свойство HelpContext
		 определяет уникальный индекс раздела контекстно-зависимой справки
		 для данного компонента.


		 ![](../../Property_Image.gif)
		 [Hint](IControl.Hint.htm)
		 Свойство Hint определяет
		 текст подсказки, появляющийся при задержке указателя мыши над
		 компонентом.


		 ![](../../Property_Image.gif)
		 [HintTimeout](IControl.HintTimeout.htm)
		 Свойство HintTimeout
		 определяет время отображения всплывающей подсказки.


		 ![](../../Property_Image.gif)
		 [Left](IControl.Left.htm)
		 Свойство Left определяет
		 координату левого края компонента в пикселях.


		 ![](../../Property_Image.gif)
		 [Parent](IControl.Parent.htm)
		 Свойство Parent определяет
		 родительский компонент.


		 ![](../../Property_Image.gif)
		 [ParentColor](IControl.ParentColor.htm)
		 Свойство ParentColor
		 определяет, будет ли для компонента заимствован цвет родительского
		 компонента.


		 ![](../../Property_Image.gif)
		 [ParentFont](IControl.ParentFont.htm)
		 Свойство ParentFont
		 определяет, будет ли для компонента использоваться шрифт родительского
		 компонента.


		 ![](../../Property_Image.gif)
		 [ParentShowHint](IControl.ParentShowHint.htm)
		 Свойство ParentShowHint
		 определяет условие отображения всплывающей подсказки.


		 ![](../../Property_Image.gif)
		 [PopupMenu](IControl.PopupMenu.htm)
		 Свойство PopupMenu
		 определяет контекстное меню, которое будет появляться по щелчку
		 правой кнопки мыши на компоненте.


		 ![](../../Property_Image.gif)
		 [Scrolls](IControl.Scrolls.htm)
		 Свойство Scrolls возвращает
		 параметры полос прокрутки компонента.


		 ![](../../Property_Image.gif)
		 [ShowHint](IControl.ShowHint.htm)
		 Свойство ShowHint определяет,
		 будет ли показываться всплывающая подсказка при задержке курсора
		 мыши над компонентом.


		 ![](../../Property_Image.gif)
		 [TabOrder](IControl.TabOrder.htm)
		 Свойство TabOrder определяет
		 позицию компонента в последовательности табуляции.


		 ![](../../Property_Image.gif)
		 [TabStop](IControl.TabStop.htm)
		 Свойство TabStop определяет
		 признак необходимости компоненту получать фокус при нажатии кнопки
		 «Tab».


		 ![](../../Property_Image.gif)
		 [Text](IControl.Text.htm)
		 Свойство Text определяет
		 строку, идентифицирующую компонент для пользователя.


		 ![](../../Property_Image.gif)
		 [Top](IControl.Top.htm)
		 Свойство Top определяет
		 координату верхнего края компонента в пикселях.


		 ![](../../Property_Image.gif)
		 [Visible](IControl.Visible.htm)
		 Свойство Visible определяет
		 видимость компонента во время выполнения формы.


		 ![](../../Property_Image.gif)
		 [Width](IControl.Width.htm)
		 Свойство Width определяет
		 горизонтальный размер компонента в пикселях.


## Свойства, унаследованные от [IComponent](../IComponent/IComponent.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ComponentCount](../IComponent/IComponent.ComponentCount.htm)
		 Свойство ComponentCount
		 возвращает количество дочерних компонентов, расположенных на родительском
		 компоненте.


		 ![](../../Property_Image.gif)
		 [Components](../IComponent/IComponent.Components.htm)
		 Свойство Components
		 возвращает дочерний компонент, индекс которого передается посредством
		 входного параметра.


		 ![](../../Property_Image.gif)
		 [Data](../IComponent/IComponent.Data.htm)
		 Свойство Data предназначено
		 для хранения любых пользовательских данных.


		 ![](../../Property_Image.gif)
		 [Name](../IComponent/IComponent.Name.htm)
		 Свойство Name определяет
		 наименование компонента.


		 ![](../../Property_Image.gif)
		 [Tag](../IComponent/IComponent.Tag.htm)
		 Свойство Tag не используется
		 компилятором. Пользователь может изменить значение данного свойства
		 и использовать его по своему усмотрению.


## Методы


		  Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [ClientToScreen](IControl.ClientToScreen.htm)
		 Метод ClientToScreen
		 преобразовывает координаты точки, указанные относительно системы
		 координат компонента, в экранные координаты.


		 ![](../../Sub_Image.gif)
		 [DoDragDrop](IControl.DoDragDrop.htm)
		 Метод DoDragDrop позволяет
		 начать операцию перетаскивания.


		 ![](../../Sub_Image.gif)
		 [GetImage](IControl.GetImage.htm)
		 Метод GetImage возвращает
		 графическое изображение компонента со всеми дочерними компонентами.


		 ![](../../Sub_Image.gif)
		 [ScreenToClient](IControl.ScreenToClient.htm)
		 Метод ScreenToClient
		 преобразовывает экранные координаты точки в координаты, указываемые
		 относительно системы координат компонента.


		 ![](../../Sub_Image.gif)
		 [SetFocus](IControl.SetFocus.htm)
		 Метод SetFocus устанавливает
		 фокус на данный компонент.


## События


		 Имя события
		 Краткое описание


		 ![](../../Event_Image.gif)
		 [OnBeginDrag](IControl.OnBeginDrag.htm)
		 Событие OnBeginDrag
		 для компонента наступает, когда пользователь начинает перетаскивать
		 объект от компонента.


		 ![](../../Event_Image.gif)
		 [OnClick](IControl.OnClick.htm)
		 Событие OnClick наступает,
		 если пользователь щёлкнул в области компонента.


		 ![](../../Event_Image.gif)
		 [OnControlMove](IControl.OnControlMove.htm)
		 Событие OnControlMove
		 наступает при перемещении компонента.


		 ![](../../Event_Image.gif)
		 [OnControlResize](IControl.OnControlResize.htm)
		 Событие OnControlResize
		 наступает при изменении размеров у компонента.


		 ![](../../Event_Image.gif)
		 [OnDblClick](IControl.OnDblClick.htm)
		 Событие OnDblClick
		 наступает, если пользователь дважды щёлкнул в области компонента.


		 ![](../../Event_Image.gif)
		 [OnDragDrop](IControl.OnDragDrop.htm)
		 Событие OnDragDrop
		 для компонента наступает, когда пользователь отпускает над ним
		 перетаскиваемый объект.


		 ![](../../Event_Image.gif)
		 [OnDragEnter](IControl.OnDragEnter.htm)
		 Событие OnDragEnter
		 наступает, когда перетаскиваемый объект входит в область данного
		 компонента.


		 ![](../../Event_Image.gif)
		 [OnDragLeave](IControl.OnDragLeave.htm)
		 Событие OnDragLeave
		 наступает, когда перетаскиваемый объект выходит за границы данного
		 компонента.


		 ![](../../Event_Image.gif)
		 [OnDragOver](IControl.OnDragOver.htm)
		 Событие OnDragOver
		 для компонента наступает, когда пользователь протаскивает над
		 ним перетаскиваемый объект.


		 ![](../../Event_Image.gif)
		 [OnEnter](IControl.OnEnter.htm)
		 Событие OnEnter наступает
		 в момент получения фокуса компонентом.


		 ![](../../Event_Image.gif)
		 [OnExit](IControl.OnExit.htm)
		 Событие OnExit наступает
		 в момент потери фокуса компонентом.


		 ![](../../Event_Image.gif)
		 [OnHScroll](IControl.OnHScroll.htm)
		 Событие OnHScroll наступает
		 при изменении положения ползунка горизонтальной полосы прокрутки.


		 ![](../../Event_Image.gif)
		 [OnKeyDown](IControl.OnKeyDown.htm)
		 Событие OnKeyDown наступает,
		 если компонент находится в фокусе и производится нажатие клавиши
		 на клавиатуре.


		 ![](../../Event_Image.gif)
		 [OnKeyPress](IControl.OnKeyPress.htm)
		 Событие OnKeyPress
		 наступает, если компонент находится в фокусе, при нажатии пользователем
		 символьной клавиши.


		 ![](../../Event_Image.gif)
		 [OnKeyPreview](IControl.OnKeyPreview.htm)
		 Событие OnKeyPreview
		 наступает перед каждым событием, связанным с нажатием клавиш.


		 ![](../../Event_Image.gif)
		 [OnKeyUp](IControl.OnKeyUp.htm)
		 Событие OnKeyUp наступает,
		 если компонент находится в фокусе, при отпускании пользователем
		 любой, ранее нажатой клавиши.


		 ![](../../Event_Image.gif)
		 [OnMouseDown](IControl.OnMouseDown.htm)
		 Событие OnMouseDown
		 наступает, если указатель находится в области компонента и была
		 нажата любая кнопка мыши.


		 ![](../../Event_Image.gif)
		 [OnMouseEnter](IControl.OnMouseEnter.htm)
		 Событие OnMouseEnter
		 наступает в момент входа курсора мыши в область компонента.


		 ![](../../Event_Image.gif)
		 [OnMouseHover](IControl.OnMouseHover.htm)
		 Событие OnMouseHover
		 наступает при задержке курсора мыши в области компонента.


		 ![](../../Event_Image.gif)
		 [OnMouseLeave](IControl.OnMouseLeave.htm)
		 Событие OnMouseLeave
		 наступает в момент выхода курсора мыши за пределы области компонента.


		 ![](../../Event_Image.gif)
		 [OnMouseMove](IControl.OnMouseMove.htm)
		 Событие OnMouseMove
		 наступает при перемещении курсора мыши над компонентом.


		 ![](../../Event_Image.gif)
		 [OnMouseUp](IControl.OnMouseUp.htm)
		 Событие OnMouseUp наступает
		 при отпускании кнопки мыши, когда указатель находится в области
		 компонента.


		 ![](../../Event_Image.gif)
		 [OnMouseWheel](IControl.OnMouseWheel.htm)
		 Событие OnMouseWheel
		 наступает, если компонент находится в фокусе при вращении колеса
		 мыши.


		 ![](../../Event_Image.gif)
		 [OnVScroll](IControl.OnVScroll.htm)
		 Событие OnVScroll наступает
		 при изменении положения ползунка вертикальной полосы прокрутки.


См. также:


[Интерфейсы сборки Forms](../ModForms_Interfaces.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
