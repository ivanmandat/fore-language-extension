# ICubeInstanceDestination.CachedEx

ICubeInstanceDestination.CachedEx
-


# ICubeInstanceDestination.CachedEx


## Синтаксис


CachedEx(ReadFromMB: Boolean): Boolean;


## Параметры


ReadFromMB. Признак проверки
 наличия кеша в базе репозитория.


## Описание


Свойство CachedEx возвращает
 признак наличия в базе репозитория кеша с учётом предыдущих проверок кеша.


## Комментарии


В зависимости от значения параметра ReadFromMB
 свойство CachedEx будет работать
 следующим образом:


	- ReadFromMB = True. Алгоритм работы совпадает
	 с алгоритмом свойства [Cached](ICubeInstanceDestination.Cached.htm)
	 - проверка наличия кеша осуществляется путём отправки запроса в базу
	 репозитория;


	- ReadFromMB = False. Запрос в базу репозитория
	 не отправляется, возвращается предыдущий результат проверки наличия
	 кеша.


См. также:


[ICubeInstanceDestination](ICubeInstanceDestination.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
