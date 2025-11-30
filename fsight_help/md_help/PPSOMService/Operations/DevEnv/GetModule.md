# GetModule: Операция

GetModule: Операция
-


**


# GetModule


## Синтаксис


GetModuleResult GetModule(OdId tObject)


## Параметры


tObject. Моникёр
 модуля.


## Описание


Операция GetModule получает
 информацию о Fore-модуле репозитория.


## Комментарии


Для выполнения операции укажите в параметре tObject
 моникёр объекта репозитория, являющегося модулем. Моникёр объекта может
 быть получен при выполнении операции [GetObjects](../Repository/GetObjects.htm).
 Результатом операции будет код, реализованный в модуле, и список ссылок
 на сборки, которые подключены к модулю.


## Пример


Ниже приведён пример использования операции GetModule
 для получения информации о модуле. В запросе передаётся моникёр модуля
 в репозитории. В ответе приходит текст модуля, список подключенных ссылок,
 а также описание модуля как объекта репозитория. В примере C# используется
 функция FindObjectById, код которой
 приведен в примере «[Получение
 описания объекта по его идентификатору](../Repository/GetObjects_Sample/GetObjects_Sample.htm)».


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetModule xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tObject xmlns="****">
  <id>S1!M!172002</id>  </tObject>
  </GetModule>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetModuleResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<meta xmlns="****">
  <text>Public Class TestObject: Object
	_arr: Array Of Double;

	Public Constructor Create;
	Begin
		_arr := New Double[5];
	End Constructor Create;

	Public Constructor CreateWithParams(Size: Integer; DefaultValue: Double = 0);
	Begin
		_arr := New Double[Size];
		If DefaultValue <> 0 Then
			//...
		End If;
	End Constructor CreateWithParams;

	Public Sub Run;
	Begin
		//...
	End Sub Run;
End Class TestObject;

Sub Main;
Var
	obj: TestObject;
Begin
	obj := New TestObject.CreateWithParams(10, 100);
	Debug.WriteLine("The main procedure is running. The object is created.");
	//...
End Sub Main;</text>[![](../../minus.gif)](../../#)<references>
[![](../../minus.gif)](../../#)<builtinReferences>
  <s>Collections</s>  <s>Cubes</s>  <s>Metabase</s>  </builtinReferences>
  <repoReferences />
  </references>
[![](../../minus.gif)](../../#)<desc ds="****" isShortcut="**0**" isLink="**0**" ver="**18**" hf="**0**">
  <i>M_ADDITIONAL</i>  <n>Дополнительно</n>  <k>172002</k>  <c>1537</c>  <p>171999</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  </desc>
  </meta>
  </GetModuleResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetModule" :
  {
   "tObject" :
    {
     "id" : "S1!M!172002"
    }
  }
}

### JSON-ответ:


{
 "GetModuleResult" :
  {
   "meta" :
    {
     "text" : "Public Class TestObject: Object
\t_arr: Array Of Double;

\tPublic Constructor Create;
\tBegin
\t\t_arr := New Double[5];
\tEnd Constructor Create;

\tPublic Constructor CreateWithParams(Size: Integer; DefaultValue: Double = 0);
\tBegin
\t\t_arr := New Double[Size];
\t\tIf DefaultValue <> 0 Then
\t\t\t\/\/...
\t\tEnd If;
\tEnd Constructor CreateWithParams;

\tPublic Sub Run;
\tBegin
\t\t\/\/...
\tEnd Sub Run;
End Class TestObject;

Sub Main;
Var
\tobj: TestObject;
Begin
\tobj := New TestObject.CreateWithParams(10, 100);
\tDebug.WriteLine("The main procedure is running. The object is created.");
\t\/\/...
End Sub Main;",
     "references" :
      {
       "builtinReferences" :
        {
         "s" :
          [
            "Collections",
            "Cubes",
            "Metabase"
          ]
        },
       "repoReferences" : ""
      },
     "desc" :
      {
       "@ds" : "",
       "@isShortcut" : "0",
       "@isLink" : "0",
       "@ver" : "18",
       "@hf" : "0",
       "i" : "M_ADDITIONAL",
       "n" : "Дополнительно",
       "k" : "172002",
       "c" : "1537",
       "p" : "171999",
       "h" : "0",
       "hasPrv" : "0",
       "ic" : "0",
       "trackElementDependents" : "0"
      }
    }
  }
}


public static GetModuleResult GetModuleInfo(MbId mb, string modId)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tGet = new GetModule()
    {
        //Формирование моникёра объекта
        tObject = new OdId() { id = mb.id + "!" + FindObjectById(mb, modId).k }
    };
    //Получение информации о модуле
    var result = somClient.GetModule(tGet);
    return result;
}


См. также:


[Работа
 со средой разработки](DevEnv_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
