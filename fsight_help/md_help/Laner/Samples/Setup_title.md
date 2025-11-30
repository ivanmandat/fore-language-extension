# Настройка заголовка листа рабочей книги

Настройка заголовка листа рабочей книги
-


# Настройка заголовка листа рабочей книги


Для выполнения примера предполагается наличие в репозитории рабочей
 книги с идентификатором «OBJ123», в которой будут изменены настройки заголовка.


Подключите ссылки на следующие системные сборки:


	- Drawing;


	- Express;


	- Metabase.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    CrInfo: IMetabaseObjectCreateInfo;

    MObj: IMetabaseObject;

    Exp: IEaxAnalyzer;

    Title: IGxTitle;

Begin

    MB := MetabaseClass.Active;

    //Открываем рабочую книгу на редактирование

    MObj := MB.ItemById("OBJ123").Edit;

    Exp := MObj As IEaxAnalyzer;

    Title := Exp.TitleBar;

    //Отобразим заголовок рабочей книги

    Title.Visible := True;

    //Текст

    Title.Text := "Отчет: &[Name]" + #13+#10 + "Дата и время создания: &[Date]&nbsp; &[Time]";

    //Цвет фона и шрифта

    Title.BackgroundColor := GxColor.FromName("LavenderBlush");

    Title.TextColor := GxColor.FromName("SlateBlue");

    //Горизонтальное выравнивание текста

    Title.TextAlignment := GxStringAlignment.Near;

    //Вертикальное выравнивание текста

    Title.VerticalAlignment := GxVerticalAlignment.Center;

    //Перенос текста

    Title.WrappedText := True;

    //Автоподгонка высоты заголовка

    Title.AutoHeight := True;

    //Максимальная высота

    Title.Height := 50;

    //Использование заголовка как элемента управления

    Title.IsControl := True;

    MObj.Save;

End Sub UserProc;


После выполнения примера будет отображен заголовок рабочей книги и изменено
 его оформление. В заголовке рабочей книги будут отображаться е ё заголовок
 и дата и время её создания:


![](Setup_title.gif)


См. также:


[Примеры](Laner_Samples.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
