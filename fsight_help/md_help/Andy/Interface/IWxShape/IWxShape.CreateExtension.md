# IWxShape.CreateExtension

IWxShape.CreateExtension
-


# IWxShape.CreateExtension


## Синтаксис


CreateExtension([ProgId: String = ""]);


## Параметры


ProgId. Класс объекта, для
 которого создается расширение. По умолчанию создается расширение для объектов
 репозитория. Расширение для объектов репозитория также можно создать,
 указав в качестве значения данного параметра значение - «KeWsp.WxMetabaseObject».


## Описание


Метод CreateExtension создает
 расширение для фигуры рабочего пространства.


## Комментарии


Данный метод используется при размещении на рабочем пространстве различных
 объектов. После создания расширения в свойстве [IWxShape.Extension](IWxShape.Extension.htm)
 необходимо указать объект, которому будет соответствовать фигура рабочего
 пространства.


В текущей реализации расширение создается для размещения на рабочем
 пространстве фигур, соответствующих объектам репозитория.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1, компонента WorkspaceBox с наименованием
 WorkspaceBox1 и какого-либо источника данных для WorkspaceBox1. В репозитории
 имеется форма с идентификатором Form_1.


Добавьте ссылки на системные сборки: Andy, Drawing, Metabase, Workspace.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    Wsp: IWxWorkspace;

	    MbObj: IMetabaseObject;

	    Shape: IWxShape;

	    WxObj: IWxMetabaseObject;

	    Style: IWxStyle;

	Begin

	    //Размещение и оформление объекта репозитория на рабочем пространстве

	    Wsp := WorkspaceBox1.View.Workspace;

	    Wsp.BeginUpdate;

	    Mb := MetabaseClass.Active;

	    MbObj := Mb.ItemById("Form_1") As IMetabaseObject;

	    Shape := Wsp.CreateRectangle;

	    Shape.CreateExtension;

	    WxObj := Shape.Extension As IWxMetabaseObject;

	    WxObj.MetabaseObject := MbObj;

	    Shape.Id := "Form";

	    //Создание стиля

	    Style := Wsp.CreateStyle;

	    Style.ShadowBrushForeColor := GxColor.FromName("Blue");

	    Style.ShadowBrushForeTransparent := 50;

	    Style.LinePenTransparent := 100;

	    Style.TextAlignmentVertical := GxAlignment.Far;

	    Shape.Style := Style;

	    Wsp.EndUpdate;

	End Sub Button1OnClick;


После выполнения примера на рабочем пространстве будет размещен указанный
 объект репозитория.


См. также:


[IWxShape.Extension](IWxShape.Extension.htm)
 | [IWxShape](IWxShape.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
