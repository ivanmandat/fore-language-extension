# IWxShape.Workspace

IWxShape.Workspace
-


# IWxShape.Workspace


## Синтаксис


Workspace: [IWxWorkspace](../IWxWorkspace/IWxWorkspace.htm);


## Описание


Свойство Workspace возвращает
 владельца фигуры - рабочее пространство.


## Пример


Для выполнения примера в репозитории предполагается наличие рабочего
 пространства с идентификатором WSP, содержащего фигуру.


Добавьте ссылки на системные сборки: Andy, Metabase.


	Sub UserProc;

	Var

	    Mb: Imetabase;

	    Wsp: IWxWorkspace;

	    Shape: IWxShape;

	Begin

	    // Получаем рабочее пространство для редактирования

	    Mb := MetabaseClass.Active;

	    Wsp := Mb.ItemById("WSP").Edit As IWxWorkspace;

	    Shape := Wsp.Shapes.Item(0);

	    Shape.SendToBack;

	    Debug.WriteLine("Данный объект принадлежит рабочему пространству: " + Shape.Workspace.Name);

	    // Сохраняем изменения

	    (Wsp As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера в окно консоли будет выведено наименование
 рабочего пространства, которому принадлежит указанная фигура.


См. также:


[IWxShape](IWxShape.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
