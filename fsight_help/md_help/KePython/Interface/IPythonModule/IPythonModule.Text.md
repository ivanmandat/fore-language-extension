# IPythonModule.Text

IPythonModule.Text
-


# IPythonModule.Text


## Синтаксис


		Text: String;


## Описание


Свойство Text определяет текст
 модуля.


## Пример


Для выполнения примера предполагается наличие в репозитории Python-модуля
 с идентификатором MOD_PYT.


Добавьте ссылки на системные сборки: Metabase, Python.


					Sub UserProc;

		Var

		    Mb: IMetabase;

		    PythonMod: IPythonModule;

		Begin

		    Mb := MetabaseClass.Active;

		    PythonMod := Mb.ItemById("MOD_PYT").Edit As IPythonModule;

		    Debug.WriteLine(PythonMod.Text);

		    //...

		    //Дальнейшая работа с текстом модуля

		    //...

		    If PythonMod.Modified Then

		        (PythonMod As IMetabaseObject).Save;

		    End If;

		End Sub UserProc;


Указанный пример в общем виде демонстрирует каким образом можно получить
 текст Python-модуля. Текст будет выведен в консоль среды разработки. Если
 в текст будут внесены какие-либо изменения, то Python-модуль будет сохранён.


См. также:


[IPythonModule](IPythonModule.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
