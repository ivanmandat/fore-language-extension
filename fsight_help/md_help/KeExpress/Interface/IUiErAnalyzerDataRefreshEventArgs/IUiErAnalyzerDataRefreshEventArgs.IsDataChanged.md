# IUiErAnalyzerDataRefreshEventArgs.IsDataChanged

IUiErAnalyzerDataRefreshEventArgs.IsDataChanged
-


# IUiErAnalyzerDataRefreshEventArgs.IsDataChanged


## Синтаксис


IsDataChanged: Boolean;


## Описание


Свойство IsDataChanged возвращает
 признак наличия измененных данных в экспресс-отчете.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента UiErAnalyzer с наименованием
 «UiErAnalyzer1» и компонента TabSheetBox с наименованием «TabSheetBox1».
 Добавьте ссылки на системные сборки Express, Pivot и Ui.


			Class SAMPLEForm: Form

    UiErAnalyzer1: UiErAnalyzer;

    TabSheetBox1: TabSheetBox;

    Button1: Button;

    olap: IEaxAnalyzer;

    pivot: IPivot;


    Sub SAMPLEFormOnCreate(Sender: Object; Args: IEventArgs);

    Begin

        olap := UiErAnalyzer1.ErAnalyzer;

        olap.EnableEdit := True;

        pivot := olap.Pivot;

    End Sub SAMPLEFormOnCreate;


    Sub UiErAnalyzer1OnBeforeDataRefresh(Sender: IUiErAnalyzer; Args: IUiErAnalyzerDataRefreshEventArgs);

    Begin

        If Args.IsDataChanged Then

            If WinApplication.ConfirmationBox("Данные были изменены и при обновлении будут потеряны, сохранить данные?") Then

                Args.SaveChangedData := True;

            End If;

        Else

            WinApplication.InformationBox("Данные не были изменены");

        End If;

    End Sub UiErAnalyzer1OnBeforeDataRefresh;


    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

    Begin

        pivot.Refresh;

    End Sub Button1OnClick;

End Class SAMPLEForm;


В процессе выполнения примера внесите изменения в какую-либо ячейку
 области данных и нажмите кнопку «Button1». Будет выдано сообщение «Данные были изменены
 и при обновлении будут потеряны, сохранить данные?».
 При утвердительном ответе изменения будут сохранены.


См. также:


[IUiErAnalyzerDataRefreshEventArgs](IUiErAnalyzerDataRefreshEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
