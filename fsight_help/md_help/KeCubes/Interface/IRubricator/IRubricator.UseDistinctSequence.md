# IRubricator.UseDistinctSequence

IRubricator.UseDistinctSequence
-


# IRubricator.UseDistinctSequence


## Синтаксис


UseDistinctSequence: Boolean;


## Описание


Свойство UseDistinctSequence
 определяет, генерировать ли ключи показателей для базы данных временных
 рядов отдельно от остальных баз данных временных рядов в репозитории.


## Комментарии


Допустимые значения:


	- True. Ключи показателей
	 для базы данных временных рядов генерируются отдельно. После установки
	 данной опции её нельзя отменить;


	- False. Ключи показателей
	 для базы данных временных рядов генерируются вместе с остальными базами
	 данных временных рядов в репозитории.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором FC.


Добавьте ссылки на системные сборки: Cubes, Db, Metabase.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    Rub: IRubricator;

	    Seq: ISequence;

	    Name: String;

	Begin

	    mb := MetabaseClass.Active;

	    Rub := mb.ItemById("FC").Edit As IRubricator;

	    If Not Rub.UseDistinctSequence Then

	        Rub.UseDistinctSequence := True;

	        (Rub As IMetabaseObject).Save;

	    End If;

	    Seq := Rub.Sequence;

	    Debug.WriteLine("Параметры генерации ключей показателей:");

	    Debug.WriteLine(" - стартовое значение :" + Seq.StartValue.ToString);

	    Debug.WriteLine(" - шаг:" + Seq.IncrementStep.ToString);

	    Name := (Seq.Database As IMetabaseObject).Name;

	    Debug.WriteLine(" - база данных:" + Name);

	    Debug.WriteLine(" - имя таблицы:" + Seq.NativeName);

	End Sub UserProc;


После выполнения примера для базы данных временных рядов будет включена
 отдельная генерация ключей показателей. Параметры генерации будут выведены
 в окно консоли.


См. также:


[IRubricator](IRubricator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
