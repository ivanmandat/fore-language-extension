# IWxShape.SendToBack

IWxShape.SendToBack
-


# IWxShape.SendToBack


## Синтаксис


SendToBack;


## Описание


Метод SendToBack перемещает
 объект на задний план.


## Пример


Для выполнения примера в репозитории предполагается наличие рабочего
 пространства с идентификатором WSP, содержащего несколько фигур.


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

	    (Wsp As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера первая фигура рабочего пространства будет перемещена
 на задний план.


См. также:


[IWxShape](IWxShape.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
