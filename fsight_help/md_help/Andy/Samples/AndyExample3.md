# Сохранение изменений рабочего пространства

Сохранение изменений рабочего пространства
-


# Сохранение изменений рабочего пространства


В рассматриваемом примере используются компоненты UiWorkspaceObject1
 и WorkspaceBox1. В качестве источника данных для WorkspaceBox1 используется
 UiWorkspaceObject1, объектом которого является рабочее пространство.


Добавьте ссылки на системные сборки: Andy, Metabase, Workspace.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Wsp: IWxWorkspace;

	Begin

	    Wsp := UiWorkspaceObject1.Instance As IWxWorkspace;

	    (UiWorkspaceObject1.Instance As IMetabaseObject).Save;

	End Sub Button1OnClick;


После нажатия на кнопку изменения, сделанные на рабочем пространстве,
 будут сохранены.


См. также:


[Примеры](Example_built_Andy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
