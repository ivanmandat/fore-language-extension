# IScPack.Package

IScPack.Package
-


# IScPack.Package


## Синтаксис


Package: [ISecurityPackage](../ISecurityPackage/ISecurityPackage.htm);


## Описание


Свойство Package возвращает
 параметры пакета безопасности.


## Пример


	Sub UserProc;

	Var

	    Man: IMetabaseManager;

	    Packs: IScPacks;

	    Pack: IScPack;

	Begin

	    Man := MetabaseManagerFactory.Active;

	    Packs := Man.Packs;

	    For Each Pack In Packs Do

	        Debug.WriteLine(Pack.Id + " " + Pack.Name);

	    End For;

	End Sub UserProc;


После выполнения примера в консоль среды разработки будет выведен список
 пакетов безопасности, доступных в платформе.


См. также:


[IScPack](IScPack.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
