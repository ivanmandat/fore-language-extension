# IView.ForceCreate

IView.ForceCreate
-


# IView.ForceCreate


## Синтаксис


ForceCreate: Boolean;


## Описание


Свойство ForceCreate определяет разрешение создания некорректного представления. Создание некорректного сохраняемого представления невозможно.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Object: IMetabaseObject;

	    Predstav: IView;

	Begin

	    MB:=MetabaseClass.Active;

	    Object:=MB.ItemById("View_1").Edit;

	    Predstav:=Object As IView;

	    Predstav.ForceCreate:=True;

	    Object.Save;

	End Sub UserProc;


После выполнения примера для представления с идентификатором «View_1» будет установлено разрешение на создание некорректного представления.


См. также:


[IView](IView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
