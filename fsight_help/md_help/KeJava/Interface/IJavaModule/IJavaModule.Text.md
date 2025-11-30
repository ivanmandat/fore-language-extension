# IJavaModule.Text

IJavaModule.Text
-


# IJavaModule.Text


## Синтаксис


Text: String;


## Описание


Свойство Text определяет текст
 модуля.


## Пример


Для выполнения примера предполагается наличие в репозитории Java-модуля
 с идентификатором MOD_JAVA.


Добавьте ссылки на системные сборки: Metabase, Java.


			Sub UserProc;

Var

    Mb: IMetabase;

    JavaMod: IJavaModule;

Begin

    Mb := MetabaseClass.Active;

    JavaMod := Mb.ItemById("MOD_JAVA").Edit As IJavaModule;

    Debug.WriteLine(JavaMod.Text);

    //...

    //Дальнейшая работа с текстом модуля

    //...

    If JavaMod.Modified Then

        (JavaMod As IMetabaseObject).Save;

    End If;

End Sub UserProc;


Указанный пример в общем виде демонстрирует каким образом можно получить
 текст Java-модуля. Текст будет выведен в консоль среды разработки. Если
 в текст будут внесены какие-либо изменения, то Java-модуль будет сохранён.


См. также:


[IJavaModule](IJavaModule.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
