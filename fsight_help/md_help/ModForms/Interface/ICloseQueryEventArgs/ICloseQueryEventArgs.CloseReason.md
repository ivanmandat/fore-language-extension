# ICloseQueryEventArgs.CloseReason

ICloseQueryEventArgs.CloseReason
-


# ICloseQueryEventArgs.CloseReason


## Синтаксис


CloseReason: [FormCloseReason](../../Enums/FormCloseReason.htm);


## Описание


Свойство CloseReason возвращает причину закрытия формы.


## Пример


Для выполнения примера предполагается наличие формы. Указанная процедура установлена для формы в качестве обработчика события OnCloseQuery.


			    Sub FormOnCloseQuery(Sender: Object; Args: ICloseQueryEventArgs);

    Var

        b: Boolean;

    Begin

        If Args.CloseReason = FormCloseReason.UserClosing Then

            b := WinApplication.ConfirmationBox(

                "Закрытие формы приведет к потере всех несохраненных данных. Закрыть форму ?");

            Args.Allowed := b;

        End If;

    End Sub FormOnCloseQuery;


При наступлении события будет определена причина закрытия формы. Если форму пытается закрыть пользователь, то на экран будет выведен диалог подтверждения. Если в диалоге будет нажата кнопка «Да», то форма будет закрыта.


См. также:


[ICloseQueryEventArgs](ICloseQueryEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
