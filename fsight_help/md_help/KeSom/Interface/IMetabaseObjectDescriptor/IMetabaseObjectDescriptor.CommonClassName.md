# IMetabaseObjectDescriptor.CommonClassName

IMetabaseObjectDescriptor.CommonClassName
-


# IMetabaseObjectDescriptor.CommonClassName


## Синтаксис


CommonClassName([CasePlural: [NameCasePlural](../../Enums/NameCasePlural.htm)
 = 0]): String;


## Параметры


CasePlural.
  Падеж, в котором необходимо
 вывести наименование.


## Описание


Свойство CommonClassName возвращает
 наименование класса объекта репозитория в заданном падеже.


## Пример


Для выполнения примера предполагается наличие в репозитории стандартного
 куба с идентификатором Cube_1.


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Descr, Desc: IMetabaseObjectDescriptor;

	    s, s1: string;

	Begin

	    MB := MetabaseClass.Active;

	    Desc := Mb.ItemById("Cube_1");

	    s := Desc.CommonClassName(NameCasePlural.Accusative);

	    s1 := Desc.CommonClassName(NameCasePlural.AccusativePlural);

	End Sub UserProc;


После выполнения примера в переменной S будет содержаться значение «стандартный
 куб», а в переменной S1 - «стандартные кубы».


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
