# RepsitoryScriptInitError

RepsitoryScriptInitError
-


# RepsitoryScriptInitError


## Описание


Перечисление RepsitoryScriptInitError
 содержит список ошибок, которые могут возникнуть при создании/обновлении
 репозитория.


Используется следующим методом:


	- [IRepositoryScriptCallback.OnStart](../Interface/IRepositoryScriptCallback/IRepositoryScriptCallback.OnStart.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 None. Ошибки отсутствуют.


		 1
		 NoTables. В указанной
		 базе нет таблиц репозитория.


		 2
		 TablesAlreadyExist.
		 В указанной базе уже есть таблицы репозитория.


		 3
		 EmptyRepository. Пустой
		 репозиторий для обновления.


		 4
		 CannotUpdateVers. Текущую
		 версию репозитория обновить нельзя.


		 5
		 UnicodeMismatch. Несоответствие
		 юникод версии репозитория в базе и в указанном файле обновления.


		 6
		 Unknown. Неопознанная
		 ошибка.


См. также:


[Перечисления
 сборки Fore](KeFore_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
