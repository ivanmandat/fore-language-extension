# IWxShape.BringToFront

IWxShape.BringToFront
-


# IWxShape.BringToFront


## Синтаксис


BringToFront;


## Описание


Метод BringToFront перемещает
 объект на передний план.


## Пример


Для выполнения примера в репозитории предполагается наличие рабочего
 пространства с идентификатором WSP, содержащего несколько фигур.


Добавьте ссылки на системные сборки: Andy, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Wsp: IWxWorkspace;

	    Shape: IWxShape;

	Begin

	    MB := MetabaseClass.Active;

	    // Получаем рабочее пространство

	    Wsp := MB.ItemById("WSP").Edit As IWxWorkspace;

	    Wsp.BeginUpdate;

	    Shape := Wsp.Shapes.Item(0);

	    Shape.BringToFront;

	    Wsp.EndUpdate;

	    // Сохраняем изменения

	    (Wsp As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера первая фигура рабочего пространства будет перемещена
 на передний план.


См. также:


[IWxShape](IWxShape.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
