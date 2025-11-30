# IMetabaseUpdateSecuritySubjectNode.Subject

IMetabaseUpdateSecuritySubjectNode.Subject
-


# IMetabaseUpdateSecuritySubjectNode.Subject


## Синтаксис


		Subject:
		 [ISecuritySubject](../ISecuritySubject/ISecuritySubject.htm);


## Описание


Свойство Subject определяет
 субъект безопасности, данные которого необходимо добавить в обновление.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    MU: IMetabaseUpdate;

		    SubNode: IMetabaseUpdateSecuritySubjectNode;

		    Sec: IMetabaseSecurity;

		    Subj: ISecuritySubject;

		    i: Integer;

		Begin

		    MB := MetabaseClass.Active;

		    MU := MB.CreateUpdate;

		    Sec := MB.Security;

		    For i := 0 To Sec.Users.Count - 1 Do

		        Subj := Sec.Users.Item(i);

		        SubNode := MU.RootFolder.Add(MetabaseUpdateNodeType.SecuritySubject) As IMetabaseUpdateSecuritySubjectNode;

		        SubNode.Label := Subj.Name;

		        SubNode.Subject := Subj;

		    End For;

		    MU.SaveToFileNF("C:\User_Update.pefx");

		End Sub UserProc;


После выполнения примера будет создано новое обновление, в котором включены
 все пользователи текущего репозитория. Обновление будет сохранено в файл
 User_Update.pefx.


См. также:


[IMetabaseUpdateSecuritySubjectNode](IMetabaseUpdateSecuritySubjectNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
