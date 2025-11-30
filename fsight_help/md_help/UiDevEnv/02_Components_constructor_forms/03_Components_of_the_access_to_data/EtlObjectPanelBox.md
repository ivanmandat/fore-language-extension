# EtlObjectPanelBox: Компонент

EtlObjectPanelBox: Компонент
-


# EtlObjectPanelBox


## Иерархия наследования


           [IComponent](ModForms.chm::/Interface/IComponent/IComponent.htm)


           [IControl](ModForms.chm::/Interface/IControl/IControl.htm)


           [IEtlObjectPanelBox](KeEtl.chm::/Interface/IEtlObjectPanelBox/IEtlObjectPanelBox.htm)


           [EtlObjectPanelBox](KeEtl.chm::/Class/EtlObjectPanelBox/EtlObjectPanelBox.htm)


## Описание


Компонент EtlObjectPanelBox
 реализует панели задачи ETL, которые используются для создания новых коннекторов
 и преобразователей.


## Работа с компонентом


После размещения компонента на форме в свойстве [IEtlObjectPanelBox.EtlBox](KeEtl.chm::/Interface/IEtlObjectPanelBox/IEtlObjectPanelBox.EtlBox.htm)
 укажите компонент [EtlBox](EtlBox.htm),
 для которого с панелей будут добавляться коннекторы и преобразователи.
 Используя свойства с префиксом Show,
 можно определить список доступных панелей. После запуска формы дважды
 щелкните пиктограмму необходимого коннектора или преобразователя. В открывшемся
 мастере задайте необходимые настройки. Описание мастеров представлено
 в подразделах «[Коннекторы
 к исходным данным](UiETL.chm::/Desktop/03_ETLObjects/02_Inputs/UiEtl_Inputs.htm)», «[Коннекторы
 к приёмнику данных](UiETL.chm::/Desktop/03_ETLObjects/03_Outputs/UiEtl_Outputs.htm)», «[Преобразователи
 данных](UiETL.chm::/Desktop/03_ETLObjects/04_Transformers/UiEtl_Trfs.htm)» и «[Группа
 объектов «Другие»](UiETL.chm::/Desktop/03_ETLObjects/Other/Other_objects_group.htm)». После задания всех настроек и нажатия
 кнопки «Готово» соответствующий
 объект будет доступен в рабочей области компонента [EtlBox](EtlBox.htm).


## Пример


![](EtlBox_Sample.png)


## Свойства компонента EtlObjectPanelBox


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ActiveTab](KeEtl.chm::/Interface/IEtlObjectPanelBox/IEtlObjectPanelBox.ActiveTab.htm)
		 Свойство ActiveTab
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
		 определяет будет ли возможность у компонента принять перетаскиваемый
		 объект.


		 ![](../../Property_Image.gif)
		 [Anchors](ModForms.chm::/Interface/IControl/IControl.Anchors.htm)
		 Свойство Anchors возвращает
		 настройки, определяющие в процентном соотношении изменение размеров
		 текущего компонента при изменении размеров родительского компонента.


		 ![](../../Property_Image.gif)
		 [BorderStyle](KeEtl.chm::/Interface/IEtlObjectPanelBox/IEtlObjectPanelBox.BorderStyle.htm)
		 Свойство BorderStyle
		 определяет стиль границы компонента.


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
		 [EtlBox](KeEtl.chm::/Interface/IEtlObjectPanelBox/IEtlObjectPanelBox.EtlBox.htm)
		 Свойство EtlBox определяет
		 компонент, с которым будет взаимодействовать текущий компонент
		 EtlObjectPanelBox.


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
		 определяет отображение всплывающего окна подсказки.


		 ![](../../Property_Image.gif)
		 [PopupMenu](ModForms.chm::/Interface/IControl/IControl.PopupMenu.htm)
		 Свойство PopupMenu
		 определяет контекстное меню, которое будет появляться по щелчку
		 дополнительной кнопки мыши на компоненте.


		 ![](../../Property_Image.gif)
		 [ShowDestinations](KeEtl.chm::/Interface/IEtlObjectPanelBox/IEtlObjectPanelBox.ShowDestinations.htm)
		 Свойство ShowDestinations
		 определяет, будет ли в компоненте отображаться вкладка «Приёмники».


		 ![](../../Property_Image.gif)
		 [ShowHint](ModForms.chm::/Interface/IControl/IControl.ShowHint.htm)
		 Свойство ShowHint включает
		 и выключает показ всплывающего окна подсказки для компонента.


		 ![](../../Property_Image.gif)
		 [ShowOthers](KeEtl.chm::/Interface/IEtlObjectPanelBox/IEtlObjectPanelBox.ShowOthers.htm)
		 Свойство ShowOthers
		 определяет, будет ли в компоненте отображаться вкладка «Другие».


		 ![](../../Property_Image.gif)
		 [ShowSources](KeEtl.chm::/Interface/IEtlObjectPanelBox/IEtlObjectPanelBox.ShowSources.htm)
		 Свойство ShowSources
		 определяет, будет ли в компоненте отображаться вкладка «Источники».


		 ![](../../Property_Image.gif)
		 [TabOrder](ModForms.chm::/Interface/IControl/IControl.TabOrder.htm)
		 Свойство TabOrder определяет
		 позицию компонента в последовательности табуляции.


		 ![](../../Property_Image.gif)
		 [TabStop](ModForms.chm::/Interface/IControl/IControl.TabStop.htm)
		 Cвойство TabStop определяет
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


## Методы компонента EtlObjectPanelBox


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


## События компонента EtlObjectPanelBox


		 Имя события
		 Краткое описание


		 ![](../../Event_Image.gif)
		 [OnNewEtlObject](KeEtl.chm::/Class/EtlObjectPanelBox/EtlObjectPanelBox.OnNewEtlObject.htm)
		 Событие OnNewEtlObject
		 наступает при вызове мастера создания нового коннектора/преобразователя.


См. также:


[Компоненты
 доступа к данным](03_components_of_the_access_to_data.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
