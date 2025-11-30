# ISmRManager.UserRPath

ISmRManager.UserRPath
-


# ISmRManager.UserRPath


## Синтаксис


UserRPath: String;


## Описание


Свойство UserRPath определяет
 путь к установленному и интегрированному с «Форсайт. Аналитическая платформа»
 пакету R.


## Комментарии


При незаданном значении свойства UserRPath
 «Форсайт. Аналитическая платформа»
 ищет путь в системном реестре. Если R установлен с настройками по умолчанию,
 данное свойство заполнять необязательно.


## Пример


Добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    RManager: ISmRManager;

Begin

    RManager := New SmRManager.Create;

    RManager.Reset;

    If RManager.IsRExist = False Then

        RManager.UserRPath := "C:\Program Files\R\R-3.1.3";

        RManager.Reset;

   End If;

End Sub UserProc;


В результате выполнения примера будет выполнена проверка наличия установленного
 и интегрированного с «Форсайт. Аналитическая платформа»
 пакета R на локальном рабочем месте. Если путь к установленному и интегрированному
 с «Форсайт. Аналитическая платформа»
 пакету R не будет найден, он будет прописан, затем будет обновлена сессия
 RServe.


См. также:


[ISmRManager](ISmRManager.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
