# IWxMetabaseObject.MetabaseObject

IWxMetabaseObject.MetabaseObject
-


# IWxMetabaseObject.MetabaseObject


## Синтаксис


MetabaseObject: [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Описание


Свойство MetabaseObject определяет
 объект репозитория, который будет отображаться в рабочем пространстве.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1, компонента WorkspaceBox с наименованием
 WorkspaceBox1 и компонента UiWorkspaceObject, либо UiWorkspace, являющегося
 источником данных для компонента WorkspaceBox1.


Добавьте ссылки на системные сборки: Andy, ExtCtrls, Forms, Ui, Workspace.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	    Var

	        MB: IMetabase;

	        Shape: IWxRectangle;

	        WxObj: IWxMetabaseObject;

	    Begin

	        MB := MetabaseClass.Active;

	        WorkspaceBox1.View.BeginUpdate;

	        Shape := WorkspaceBox1.View.Workspace.CreateRectangle;

	        Shape.Style.TextPosition := WxTextPosition.Bottom;

	        Shape.CreateExtension("KeWsp.WxMetabaseObject");

	        Shape.Id := "New_Shape";

	        WxObj := Shape.Extension As IWxMetaBaseObject;

	        WxObj.MetabaseObject := MB.ItemById("Etl");

	        WorkspaceBox1.View.EndUpdate;

	End Sub Button1OnClick;


После выполнения примера, при нажатии на кнопку, на рабочем пространстве
 будет добавлен объект репозитория с идентификатором "Etl".


См. также:


[IWxMetabaseObject](IWxMetabaseObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
