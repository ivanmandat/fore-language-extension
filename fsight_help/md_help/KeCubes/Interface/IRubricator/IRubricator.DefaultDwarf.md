# IRubricator.DefaultDwarf

IRubricator.DefaultDwarf
-


# IRubricator.DefaultDwarf


## Синтаксис


DefaultDwarf: Boolean;


## Описание


Свойство DefaultDwarf определяет,
 использовать ли оптимизацию при загрузке данных базы данных временных
 рядов в память.


## Комментарии


Допустимые значения:


	- True. Оптимизация используется.
	 При загрузке данных используется меньше оперативной памяти;


	- False. Оптимизация не
	 используется.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором FC.


Добавьте ссылки на системные сборки: Cubes, Metabase.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Rubr: IRubricator;

	Begin

	    Mb := MetabaseClass.Active;

	    Rubr := Mb.ItemById("FC").Edit As IRubricator;

	    If Not Rubr.DefaultDwarf Then

	        Rubr.DefaultDwarf := True;

	        (Rubr As IMetabaseObject).Save;

	    End If;

	End Sub UserProc;


После выполнения примера база данных временных рядов будет использовать
 оптимизацию при загрузке данных в память.


См. также:


[IRubricator](IRubricator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
