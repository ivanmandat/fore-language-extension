# IMetabaseClass.CommonClassName

IMetabaseClass.CommonClassName
-


# IMetabaseClass.CommonClassName


## Синтаксис


CommonClassName(MetabaseClass: [MetabaseObjectClass](../../Enums/MetabaseObjectClass.htm);
 [CasePlural: [NameCasePlural](../../Enums/NameCasePlural.htm)
 = 0]): String;


## Параметры


MetabaseClass. Класс объекта.


CasePlural. Падеж, в котором необходимо получить наименование.


## Описание


Свойство CommonClassName возвращает
 наименование указанного класса объекта репозитория в заданном падеже.


## Пример


	Sub UserProc;

	Begin

	    Debug.WriteLine(MetabaseClass.CommonClassName(

	        MetabaseObjectClass.KE_CLASS_FOLDER,

	        NameCasePlural.Accusative));

	End Sub UserProc;


После выполнения примера в консоль среды разработки будет выведено наименование
 класса, реализующего папки репозитория, в винительном падеже, т.е. "папку".


См. также:


[IMetabaseClass](IMetabaseClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
