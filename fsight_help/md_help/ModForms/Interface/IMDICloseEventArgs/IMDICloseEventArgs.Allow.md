# IMDICloseEventArgs.Allow

IMDICloseEventArgs.Allow
-


# IMDICloseEventArgs.Allow


## Синтаксис


Allow: Boolean;


## Описание


Свойство Allow определяет возможность
 закрытия дочерней MDI-формы.


## Комментарии


По умолчанию свойству установлено значение True,
 при этом форма будет закрыта. Если свойству установить значение False, то закрытие дочерней MDI-формы
 будет отменено.


## Пример


Для выполнения примера предполагается наличие формы. Данная форма является
 родительской MDI-формой, содержащей несколько дочерних. При работе у дочерних
 MDI-форм изменяется значение свойства Tag.


			Sub FormOnMDIClose(Sender: Object; Args: IMDICloseEventArgs);

Begin

    If Args.MDIChild.Tag = 100 Then

        Args.Allow := False;

    End If;

End Sub FormOnMDIClose;


После выполнения примера при попытке закрыть дочернюю MDI-форму, если
 ее свойство Tag равно 100, то закрытие данной формы будет отменено.


См. также:


[IMDICloseEventArgs](IMDICloseEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
