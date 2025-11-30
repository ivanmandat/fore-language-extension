# ControlBar: Класс

ControlBar: Класс
-


# ControlBar


## Описание


Класс ControlBar предоставляет
 компонент среды разработки [ControlBar](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/ControlBar.htm),
 используемый для создания всплывающих панелей на форме.


## Свойства, унаследованные от [IControlBar](../../Interface/IControlBar/IControlBar.htm)


		  Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AllowDocking](../../Interface/IControlBar/IControlBar.AllowDocking.htm)


		 Свойство AllowDocking
		 определяет, может ли всплывающая панель находиться в припаркованном
		 состоянии.


		 ![](../../Property_Image.gif)
		 [AllowFloat](../../Interface/IControlBar/IControlBar.AllowFloat.htm)


		 Свойство AllowFloat
		 определяет, может ли всплывающая панель находиться в плавающем
		 состоянии.


		 ![](../../Property_Image.gif)
		 [AutoHide](../../Interface/IControlBar/IControlBar.AutoHide.htm)


		 Свойство AutoHide определяет,
		 может ли всплывающая панель находиться в скрытом состоянии.


		 ![](../../Property_Image.gif)
		 [DockEdge](../../Interface/IControlBar/IControlBar.DockEdge.htm)


		 Свойство DockEdge возвращает
		 настройки, определяющие стороны родительского окна, к которым
		 будет возможность прикрепить всплывающую панель во время выполнения
		 формы.


		 ![](../../Property_Image.gif)
		 [DockPosition](../../Interface/IControlBar/IControlBar.DockPosition.htm)


		 Свойство DockPosition
		 определяет край родительского окна, к которому будет прикреплена
		 всплывающая панель.


		 ![](../../Property_Image.gif)
		 [Floating](../../Interface/IControlBar/IControlBar.Floating.htm)


		 Свойство Floating возвращает
		 True, если панель находится
		 в плавающем состоянии.


		 ![](../../Property_Image.gif)
		 [Form](../../Interface/IControlBar/IControlBar.Form.htm)


		 Свойство Form возвращает
		 родительскую форму для данной всплывающей панели.


		 ![](../../Property_Image.gif)
		 [Height](../../Interface/IControlBar/IControlBar.Height.htm)


		 Свойство Height определяет
		 вертикальный размер всплывающей панели в пикселях.


		 ![](../../Property_Image.gif)
		 [Hidden](../../Interface/IControlBar/IControlBar.Hidden.htm)


		 Свойство Hidden определяет
		 состояние, в котором находится панель.


		 ![](../../Property_Image.gif)
		 [Id](../../Interface/IControlBar/IControlBar.Id.htm)


		 Свойство Id определяет
		 уникальный идентификатор всплывающей панели.


		 ![](../../Property_Image.gif)
		 [Left](../../Interface/IControlBar/IControlBar.Left.htm)


		 Свойство Left определяет
		 координату левой границы всплывающей панели.


		 ![](../../Property_Image.gif)
		 [MetabaseObject](../../Interface/IControlBar/IControlBar.MetabaseObject.htm)


		 Свойство MetabaseObject
		 определяет идентификатор формы, которая будет отображаться во
		 всплывающей панели.


		 ![](../../Property_Image.gif)
		 [Text](../../Interface/IControlBar/IControlBar.Text.htm)


		 Свойство Text определяет
		 текст заголовка всплывающей панели либо текст, отображаемый на
		 вкладке, если панель скрыта.


		 ![](../../Property_Image.gif)
		 [Top](../../Interface/IControlBar/IControlBar.Top.htm)


		 Свойство Top определяет
		 координату верхней границы всплывающей панели.


		 ![](../../Property_Image.gif)
		 [Visible](../../Interface/IControlBar/IControlBar.Visible.htm)


		 Свойство Visible определяет
		 видимость компонента во время выполнения формы.


		 ![](../../Property_Image.gif)
		 [Width](../../Interface/IControlBar/IControlBar.Width.htm)


		 Свойство Width определяет
		 горизонтальный размер всплывающей панели в пикселях.


## Свойства, унаследованные от [IComponent](../../Interface/IComponent/IComponent.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ComponentCount](../../Interface/IComponent/IComponent.ComponentCount.htm)
		 Свойство ComponentCount
		 возвращает количество дочерних компонентов, расположенных на родительском
		 компоненте.


		 ![](../../Property_Image.gif)
		 [Components](../../Interface/IComponent/IComponent.Components.htm)
		 Свойство Components
		 возвращает дочерний компонент, индекс которого передается посредством
		 входного параметра.


		 ![](../../Property_Image.gif)
		 [Data](../../Interface/IComponent/IComponent.Data.htm)
		 Свойство Data предназначено
		 для хранения любых пользовательских данных.


		 ![](../../Property_Image.gif)
		 [Name](../../Interface/IComponent/IComponent.Name.htm)
		 Свойство Name определяет
		 наименование компонента.


		 ![](../../Property_Image.gif)
		 [Tag](../../Interface/IComponent/IComponent.Tag.htm)
		 Свойство Tag не используется
		 компилятором. Пользователь может изменить значение данного свойства
		 и использовать его по своему усмотрению.


## Методы, унаследованные от [IControlBar](../../Interface/IControlBar/IControlBar.htm)


		  Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [DockIn](../../Interface/IControlBar/IControlBar.DockIn.htm)


		 Метод DockIn осуществляет
		 группировку всплывающих панелей.


		 ![](../../Sub_Image.gif)
		 [DockOf](../../Interface/IControlBar/IControlBar.DockOf.htm)


		 Метод DockOf осуществляет
		 "парковку" данной панели к панели, передаваемой посредством
		 входного параметра.


		 ![](../../Sub_Image.gif)
		 [Float](../../Interface/IControlBar/IControlBar.Float.htm)


		 Метод Float переводит
		 панель в плавающее состояние.


		 ![](../../Sub_Image.gif)
		 [IsDocked](../../Interface/IControlBar/IControlBar.IsDocked.htm)


		 Метод IsDocked осуществляет
		 проверку, находится ли данная всплывающая панель в одной группе
		 с панелью, передаваемой посредством входного параметра.


		 ![](../../Sub_Image.gif)
		 [PutParentForm](../../Interface/IControlBar/IControlBar.PutParentForm.htm)


		 Метод PutParentForm
		 устанавливает родительскую форму для всплывающей панели.


См. также:


[Классы сборки Forms](../ModForms_Classes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
