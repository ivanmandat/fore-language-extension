# DebugWebForm: Операция

DebugWebForm: Операция
-


**


# DebugWebForm


## Синтаксис


DebugWebFormResult DebugWebForm(OdId tOb, DebugWebFormArg
 tArg)


## Параметры


tOb. Моникёр
 объекта репозитория, являющегося веб-формой.


tArg. Параметры выполнения
 операции.


## Описание


Операция DebugWebForm управляет
 процессом отладки кода веб-формы.


## Комментарии


Операция позволяет запускать на отладку прикладной код веб-формы, а
 также управлять процессом отладки. Для выполнения операции укажите в поле
 tOb моникёр объекта репозитория,
 являющегося веб-формой. Моникёр объекта может быть получен при выполнении
 операции [GetObjects](../Repository/GetObjects.htm). В поле
 tArg.dbgCommand укажите команду,
 выполняемую для отлаживаемой веб-формы. В поле tArg.cstmArgs
 могут быть переданы дополнительные аргументы, передаваемые в событие OnShow.
 Данные аргументы используются, если веб-форма обрабатывает какую-либо
 операцию у объекта пользовательского класса.


Результатом выполнения операции будет информация о текущем статусе выполнения
 отладки веб-формы.


## Пример


Ниже приведён пример запуска веб-формы на отладку. В запросе передаётся
 моникёр объекта репозитория, являющегося веб-формой. В ответе возвращается
 текущий статус выполнения отладки.


В примере C# используется функция FindObjectById,
 код которой приведен в примере «[Получение
 описания объекта по его идентификатору](../Repository/GetObjects_Sample/GetObjects_Sample.htm)».


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<DebugWebForm xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tOb xmlns="****">
  <id>MOJLOKEFOGAGGOAENBGAEIBNCJEHDMMEKIEKKCHOINPCKLHD!M!432354</id>  </tOb>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<dbgCommand>
  <command>Start</command>  </dbgCommand>
  </tArg>
  </DebugWebForm>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<DebugWebFormResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>MOJLOKEFOGAGGOAENBGAEIBNCJEHDMMEKIEKKCHOINPCKLHD!M!S!WFMKIHMPEFOGAGGOAEEBNHGMOEGHGAHANEJILLFCKJAGLEFLAK</id>  </id>
  <state xmlns="****">Running</state>  </DebugWebFormResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "DebugWebForm" :
  {
   "tOb" :
    {
     "id" : "MOJLOKEFOGAGGOAENBGAEIBNCJEHDMMEKIEKKCHOINPCKLHD!M!432354"
    },
   "tArg" :
    {
     "dbgCommand" :
      {
       "command" : "Start"
      }
    }
  }
}

### JSON-ответ:


{
 "DebugWebFormResult" :
  {
   "id" :
    {
     "id" : "MOJLOKEFOGAGGOAENBGAEIBNCJEHDMMEKIEKKCHOINPCKLHD!M!S!WFMKIHMPEFOGAGGOAEEBNHGMOEGHGAHANEJILLFCKJAGLEFLAK"
    },
   "state" : "Running"
  }
}


public static DebugWebFormResult DebugWebForm(MbId mb, string modId, DebugCommand dCommand)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new DebugWebForm()
    {
        tArg = new DebugWebFormArg()
        {
            dbgCommand = new DebugModuleArg()
            {
                command = dCommand
            }
        },
        tOb = new OdId() { id = mb.id + "!" + FindObjectById(mb, modId).k }
    };
    // Управление отладкой веб-формы
    var result = somClient.DebugWebForm(tGet);
    return result;
}


См. также:


[Работа
 со средой разработки](DevEnv_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
