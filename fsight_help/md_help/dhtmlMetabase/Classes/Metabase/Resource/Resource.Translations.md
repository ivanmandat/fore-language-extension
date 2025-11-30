# Resource.Translations

Resource.Translations
-


# Resource.Translations


## Синтаксис


Translations(resourceID : string);


## Параметры


resourceId. Идентификатор ресурса.


## Описание


Свойство Tranlsations определяет
 объекты, содержащие локализованные строки.


## Комментарии


Свойство содержит объект типа {LCID: string}, где LCID - [четырехзначный
 цифровой код языка](http://msdn.microsoft.com/en-us/goglobal/bb964664.aspx).


Значение устанавливается при помощи метода setTranslations(resourceId,
 translations). resourceId.
 Идентификатор ресурса, для которого необходимо установить локализацию.
 translations. Объект с локализованнымим
 строками.


Значение возвращается при помощи метода getTranslations(resourceId).
 resourceId. Идентификатор ресурса,
 для которого необходимо вернуть локализацию.


См. также:


[Resource](Resource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
