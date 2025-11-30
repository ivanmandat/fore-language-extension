# ISmLPSolveManager.UserLPSolvePath

ISmLPSolveManager.UserLPSolvePath
-


# ISmLPSolveManager.UserLPSolvePath


## Синтаксис


UserLPSolvePath: String;


## Описание


Свойство UserLPSolvePath определяет
 путь до библиотеки lpsolve55.dll или liblpsolve55.so.


## Комментарии


Библиотека lpsolve55.dll для ОС Windows или liblpsolve55.so для ОС Linux
 необходима, чтобы в «Форсайт. Аналитическая платформа»
 была возможность использовать модуль для решения линейных задач LPSolve.
 Библиотека должна быть предварительно загружена и распакована. Загрузку
 можно произвести с одного из следующих сайтов:


	- [http://lpsolve.sourceforge.net/5.5/distribution.htm](http://lpsolve.sourceforge.net/5.5/distribution.htm)


	- [https://sourceforge.net/projects/lpsolve/files/lpsolve/5.5.2.11/](https://sourceforge.net/projects/lpsolve/files/lpsolve/5.5.2.11/)


Также для использования библиотеки должна быть рассчитана и сохранена
 её [контрольная
 сумма](UiNav.chm::/02_Navigator/CommonSettings/Integration.htm#lpsolve).


## Пример


Для выполнения примера предполагается, что библиотека lpsolve55.dll
 загружена и сохранена в подкаталог C:\Work\LPSolve\.


Добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    LPSolve: ISmLPSolveManager;

Begin

    LPSolve := New SmLPSolveManager.Create;

    LPSolve.UserLPSolvePath := "C:\Work\LPSolve\lpsolve55.dll";

End Sub UserProc;


В результате выполнения примера для текущего репозитория будет задан
 путь, по которому будет использоваться библиотека lpsolve55.dll.


См. также:


[ISmLPSolveManager](ISmLPSolveManager.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
