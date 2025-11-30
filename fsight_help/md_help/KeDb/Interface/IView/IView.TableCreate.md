# IView.TableCreate

IView.TableCreate
-


# IView.TableCreate


## Синтаксис


TableCreate: Boolean;


## Описание


Свойство TableCreate определяет, будет ли представление сохраняемым. Создание некорректного сохраняемого представления невозможно.


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

	    Predstav.TableCreate:=True;

	    Object.Save;

	End Sub UserProc;


После выполнения примера для представления с идентификатором «View_1» будет установлено разрешение на создание сохраняемого представления.


См.также:


[IView](IView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
