# IAuditFilter.Top

IAuditFilter.Top
-


# IAuditFilter.Top


## Синтаксис


Top: Integer;


## Описание


Свойство Top определяет количество
 рассматриваемых записей протокола доступа.


## Комментарии


Свойство позволяет ограничить количество рассматриваемых записей протокола
 доступа, что ускоряет работу с ним.


По умолчанию свойство имеет значение 0.


При значениях 0 и -1 список записей протокола доступа неограничен, то
 есть рассматриваются все записи.


## Пример


Для выполнения примера создайте форму, добавьте на нее кнопку с наименованием
 «Button1», компонент IntegerEdit с наименованием «IntegerEdit1» и компонент
 Memo с наименованием «Memo1», укажите в компоненте «IntegerEdit1» желаемое
 количество записей протокола доступа, которые должны быть отображены.


Добавьте ссылку на системную сборку Metabase.


			Sub ShowLog(log: IAuditLog);

Var

    opers: IAuditOperations;

Begin

    Memo1.Lines.Clear;

    opers := log.OpenOperations(-1);

    While Not opers.Eof Do

        Memo1.Lines.Add(opers.Name + "  " + opers.Stamp.ToString);

        opers.Next;

    End While;

End Sub ShowLog;

Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    log: IAuditLog;

    MB: IMetabase;

    MS: IMetabaseSecurity;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    log := MetabaseClass.Active.Security.OpenAuditLog;

    log.Filter.Top := IntegerEdit1.Value;

    ShowLog(log);

End Sub Button1OnClick;


При нажатии на кнопку «Button1» в поле «Memo1» появится список из указанного
 количества последних записей протокола доступа.


См. также:


[IAuditFilter](IAuditFilter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
