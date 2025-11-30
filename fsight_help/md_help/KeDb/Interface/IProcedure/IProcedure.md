# IProcedure

IProcedure
-


# IProcedure


Сборка: Db;


## Описание


Интерфейс IProcedure содержит
 свойства и методы объекта репозитория - [Процедура](UiNavObj.chm::/procedure/UiDb_relationa_procedure.htm).


## Иерархия наследования


           [ISQLCommand](../ISQLCommand/ISQLCommand.htm)


           IProcedure


## Комментарии


При создании новой процедуры для её корректной работы необходимо, чтобы
 в настройках был задан следующий минимальный набор свойств:


	- [Database](../ISQLCommand/ISQLCommand.Database.htm);


	- [NativeName](IProcedure.NativeName.htm);


	- [Text](../ISQLCommand/ISQLCommand.Text.htm).


Для выполнения процедуры и получения результатов откройте объект репозитория
 с помощью метода [IMetabaseObjectDescriptor.Open](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Open.htm)
 или [IMetabaseObjectDescriptor.OpenWithParam](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.OpenWithParam.htm)
 и приведите его к интерфейсу [ISQLCommandInstance](../ISQLCommandInstance/ISQLCommandInstance.htm).
 Если процедура параметрическая, то набор параметров для открытия можно
 сформировать с помощью метода [IMetabaseObjectParams.CreateEmptyValues](KeSom.chm::/Interface/IMetabaseObjectParams/IMetabaseObjectParams.CreateEmptyValues.htm).
 Параметры, имеющие тип «Выходной» или «Результат функции», будут доступны
 в созданном наборе параметров после выполнения метода [ISQLCommandInstance.Execute](../ISQLCommandInstance/ISQLCommandInstance.Execute.htm).


При создании в репозитории объекта [Процедура](UiNavObj.chm::/procedure/UiDb_relationa_procedure.htm)
 на сервере СУБД будет создана хранимая процедура/функция. С ней также
 можно работать с помощью ресурсов [сборки DAL](Dal.chm::/Dal_Title.htm), пример
 использования приведён в статье «[Выполнение хранимых
 процедур и функций](Dal.chm::/Intro/Dal_ExecStoredProcedure.htm)».


Примечание.
 При выполнении большого количества процедур, а также процедур с выходными
 параметрами, рекомендуется использовать ресурсы [сборки DAL](Dal.chm::/Dal_Title.htm), а
 не интерфейс [ISQLCommandInstance](../ISQLCommandInstance/ISQLCommandInstance.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [External](IProcedure.External.htm)
		 Свойство External возвращает
		 признак присоединенной процедуры.


		 ![](../../Property_Image.gif)
		 [ForceCreate](IProcedure.ForceCreate.htm)
		 Свойство ForceCreate
		 определяет возможность создания некорректной процедуры.


		 ![](../../Property_Image.gif)
		 [Kind](IProcedure.Kind.htm)
		 Свойство Kind позволяет
		 определить тип создаваемого объекта: функция или процедура.


		 ![](../../Property_Image.gif)
		 [NativeName](IProcedure.NativeName.htm)
		 Свойство NativeName
		 определяет физическое имя процедуры в базе данных.


## Свойства, унаследованные от [ISQLCommand](../ISQLCommand/ISQLCommand.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Database](../ISQLCommand/ISQLCommand.Database.htm)
		 Свойство Database определяет
		 базу данных, в которой хранится команда СУБД.


		 ![](../../Property_Image.gif)
		 [Text](../ISQLCommand/ISQLCommand.Text.htm)
		 Свойство Text определяет
		 текст SQL-запроса для определенного драйвера СУБД.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AlterProcedure](IProcedure.AlterProcedure.htm)
		 Метод AlterProcedure
		 обновляет текст процедуры в базе данных в соответствии с текстом
		 процедуры в репозитории.


		 ![](../../Sub_Image.gif)
		 [AttachProcedure](IProcedure.AttachProcedure.htm)
		 Метод AttachProcedure
		 обновляет информацию о структуре процедуры в репозитории, в соответствии
		 со структурой процедуры на сервере БД.


		 ![](../../Sub_Image.gif)
		 [CreateProcedure](IProcedure.CreateProcedure.htm)
		 Метод CreateProcedure
		 осуществляет создание процедуры в базе данных на основе имеющихся
		 метаданных.


		 ![](../../Sub_Image.gif)
		 [DropProcedure](IProcedure.DropProcedure.htm)
		 Метод DropProcedure
		 осуществляет удаление процедуры из базы данных на сервере.


		 ![](../../Sub_Image.gif)
		 [Refresh](IProcedure.Refresh.htm)
		 Метод Refresh заканчивает
		 обновление, сохраняя все изменения.


		 ![](../../Sub_Image.gif)
		 [UpdateProcedure](IProcedure.UpdateProcedure.htm)
		 Метод UpdateProcedure
		 осуществляет обновление структуры процедуры на сервере БД в соответствии
		 со структурой текущей процедуры.


## Методы, унаследованные от [ISQLCommand](../ISQLCommand/ISQLCommand.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [ClearText](../ISQLCommand/ISQLCommand.ClearText.htm)
		 Метод ClearText осуществляет
		 очистку оператора команды СУБД.


См. также:


[Интерфейсы сборки Db](../KeDb_Interface.htm)
 | [ISQLCommandInstance](../ISQLCommandInstance/ISQLCommandInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
