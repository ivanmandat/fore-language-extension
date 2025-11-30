# NavigationBar: Компонент

NavigationBar: Компонент
-


# NavigationBar


## Иерархия наследования


           [IComponent](ModForms.chm::/Interface/IComponent/IComponent.htm)


           [IControl](ModForms.chm::/Interface/IControl/IControl.htm)


           [INavigationBar](ModForms.chm::/Interface/INavigationBar/INavigationBar.htm)


           [NavigationBar](ModForms.chm::/Class/NavigationBar/NavigationBar.htm)


## Описание


Компонент NavigationBar используется
 для создания навигационной панели.


## Работа с компонентом


Навигационная панель строится из вертикально расположенных вкладок.
 Каждая вкладка состоит из заголовка и панели с элементами управления.
 Активация вкладки происходит при щелчке по ее заголовку. При необходимости
 любая вкладка может быть скрыта.


Настройка компонента осуществляется программно и заключается в формировании
 коллекции вкладок. Для создания вкладки необходимо создать экземпляр класса
 [NavigationBarPad](ModForms.chm::/Class/NavigationBarPad/NavigationBarPad.htm)
 и включить его в коллекцию [Pads](ModForms.chm::/Interface/INavigationBar/INavigationBar.Pads.htm)
 компонента NavigationBar. Для
 каждой вкладки необходимо настроить заголовок (свойство [INavigationBarPad.Header](ModForms.chm::/Interface/INavigationBarPad/INavigationBarPad.Header.htm))
 и панель (свойство [INavigationBarPad.Content](ModForms.chm::/Interface/INavigationBarPad/INavigationBarPad.Content.htm)).
 Заголовок может включать в себя текст и какой-либо элемент управления.
 Панель, связанная с заголовком, является фреймом для формы с элементами
 управления. Идентификатор формы указывается в свойстве [INavigationBarPanel.MetabaseObject](ModForms.chm::/Interface/INavigationBarPanel/INavigationBarPanel.MetabaseObject.htm).


## Пример


![](NavigationBar_Sample.gif)


## Свойства компонента NavigationBar


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ActivePad](ModForms.chm::/Interface/INavigationBar/INavigationBar.ActivePad.htm)
		 Свойство ActivePad
		 определяет активную вкладку компонента.


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
		 [Border](ModForms.chm::/Interface/INavigationBar/INavigationBar.Border.htm)
		 Свойство Border определит
		 границы, которые будут отрисованы для компонента.


		 ![](../../Property_Image.gif)
		 [Brush](ModForms.chm::/Interface/IControl/IControl.Brush.htm)
		 Свойство Brush определяет
		 кисть, используемую для заливки области компонента.


		 ![](../../Property_Image.gif)
		 [ClientHeight](modforms.chm::/Interface/IControl/IControl.ClientHeight.htm)
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
		 [Left](ModForms.chm::/Interface/IControl/IControl.Left.htm)
		 Свойство Left определяет
		 координату левого края компонента.


		 ![](../../Property_Image.gif)
		 [Name](ModForms.chm::/Interface/IComponent/IComponent.Name.htm)
		 Свойство Name определяет
		 наименование компонента.


		 ![](../../Property_Image.gif)
		 [Pads](ModForms.chm::/Interface/INavigationBar/INavigationBar.Pads.htm)
		 Свойство Pads возвращает
		 коллекцию вкладок навигационной панели.


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


## Методы компонента NavigationBar


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [BeginUpdate](ModForms.chm::/Interface/INavigationBar/INavigationBar.BeginUpdate.htm)
		 Метод BeginUpdate
		 отключает перерисовку содержимого компонента.


		 ![](../../Sub_Image.gif)
		 [BringToFront](ModForms.chm::/Interface/IControl/IControl.BringToFront.htm)
		 Метод BringToFront
		 располагает компонент на передний план.


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
		 [EndUpdate](ModForms.chm::/Interface/INavigationBar/INavigationBar.EndUpdate.htm)
		 Метод EndUpdate возобновляет
		 перерисовку содержимого компонента.


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
		 [SendToBack](ModForms.chm::/Interface/IControl/IControl.SendToBack.htm)
		 Метод SendToBack располагает
		 компонент на задний план.


		 ![](../../Sub_Image.gif)
		 [SetFocus](ModForms.chm::/Interface/IControl/IControl.SetFocus.htm)
		 Метод SetFocus устанавливает
		 фокус на данный компонент.


## События компонента NavigationBar


		 Имя события
		 Краткое описание


		 ![](../../Event_Image.gif)
		 [OnActivePadChanged](ModForms.chm::/Class/NavigationBar/NavigationBar.OnActivePadChanged.htm)
		 Событие OnActivePadChanged
		 наступает после смены активной вкладки навигационной панели.


		 ![](../../Event_Image.gif)
		 [OnActivePadChanging](ModForms.chm::/Class/NavigationBar/NavigationBar.OnActivePadChanging.htm)
		 Событие OnActivePadChanging
		 наступает перед сменой активной вкладки навигационной панели.


		 ![](../../Event_Image.gif)
		 [OnPadValueChanged](ModForms.chm::/Class/NavigationBar/NavigationBar.OnPadValueChanged.htm)
		 Событие OnPadValueChanged
		 наступает при смене отметки у флага, который отображается в заголовке
		 вкладки.


См. также:


[Дополнительные
 компоненты](Additional_components.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
