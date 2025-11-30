# IStandardDimIndex.UseInSelection

IStandardDimIndex.UseInSelection
-


# IStandardDimIndex.UseInSelection


## Синтаксис


UseInSelection: Boolean;


## Описание


Свойство UseInSelection определяет,
 используется ли индекс при формировании отметки.


## Комментарии


Допустимые значения:


	- True. Индекс используется
	 при формировании отметки. Это позволит его использовать для сохранения
	 и восстановления отметки по измерению, основанному на справочнике.

	В справочнике может быть только один уникальный ключ, используемый
	 для формирования отметки. Если какой-либо индекс уже используется
	 для этого, то для него значение свойства UseInSelection
	 будет автоматически изменено на False;


	- False. Индекс не используется
	 при формировании отметки.


## Пример


Для выполнения примера в репозитории предполагается наличие табличного
 справочника с идентификатором «SELECTION_INDEX». Данный справочник должен
 использоваться в качестве измерения в базе данных временных рядов.


Добавьте ссылки на системные сборки: Dal, Dimensions, Metabase.


			Sub UserProc;

Var

    mb: IMetabase;

    Dim: IStandardDimension;

    Indexes: IStandardDimIndexes;

    Index: IStandardDimIndex;

    Attrs: IStandardDimAttributes;

    Attr: IStandardDimAttribute;

Begin

    // Получаем текущий репозиторий

    mb := MetabaseClass.Active;

    // Получаем справочник

    Dim := mb.ItemById("SELECTION_INDEX").Edit As IStandardDimension;

    // Получаем индексы справочника

    Indexes := Dim.Indexes;

    // Добавляем новый индекс

    Index := Indexes.Add;

    // Задаем его наименование

    Index.Name := "Индекс для формирования отметки";

    // Получаем атрибуты справочника

    Attrs := Dim.Attributes;

    // Добавляем новый атрибут

    Attr := Attrs.Add;

    // Задаем его параметры

    Attr.Name := "Атрибут для индекса";

    Attr.DataType := DbDataType.String;

    // Указываем, что созданный атрибут будет использоваться новым индексом

    Index.Attributes.Add(Attr);

    // Указываем, что индекс регистрозависимый

    Index.CaseSensitive := True;

    // Указываем, что индекс используется для формирования отметки

    Index.UseInSelection := True;

    // Сохраняем изменения

    (Dim As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера в табличном справочнике НСИ будет создан
 индекс, который может быть использован для сохранения и восстановления
 отметки по измерению, основанному на данном справочнике.


См. также:


[IStandardDimIndex](IStandardDimIndex.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
