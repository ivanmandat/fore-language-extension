# IResourceLocales.FindById

IResourceLocales.FindById
-


# IResourceLocales.FindById


## Синтаксис


FindById(Id: String): [IResourceLocale](../IResourceLocale/IResourceLocale.htm);


## Параметры


Id. Идентификатор языка.


## Описание


Метод FindById выполняет
 поиск языка ресурсов по заданному идентификатору.


## Комментарии


В качестве значения параметра Id
 необходимо указывать 2х-буквенный код языка в соответствии со стандартом
 ISO 639-1. Данное значение можно получить используя свойство [TwoLetterISOLanguageName](ForeSys.chm::/Interface/ICultureInfo/ICultureInfo.TwoLetterISOLanguageName.htm).


Если язык с указанным идентификатором не найден, то метод возвращает
 значение Null.


См. также:


[IResourceLocales](IResourceLocales.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
