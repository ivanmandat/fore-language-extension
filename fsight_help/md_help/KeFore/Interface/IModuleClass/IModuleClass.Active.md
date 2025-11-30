# IModuleClass.Active

IModuleClass.Active
-


# IModuleClass.Active


## Синтаксис


Active: [IModule](KeSom.chm::/Interface/IModule/IModule.htm);


## Описание


Свойство Active возвращает текущий
 модуль, из которого выполняется текущий код.


## Пример


Добавьте ссылки на системные сборки: Fore, Metabase.


			Sub UserProc;

Var

    CurMod: IModule;

    MObj: IMetabaseObjectDescriptor;

Begin

    CurMod := ModuleClass.Active;

    MObj := CurMod As IMetabaseObjectDescriptor;

    Debug.WriteLine("Текущий модуль: " + MObj.Name + '(' + MObj.Id + ')');

End Sub UserProc;


При выполнении примера в консоль среды разработки будут выведены наименование
 и идентификатор модуля, из которого выполняется текущий код.


См. также:


[IModuleClass](IModuleClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
