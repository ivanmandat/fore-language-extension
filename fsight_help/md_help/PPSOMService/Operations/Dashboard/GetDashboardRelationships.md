# GetDashboardRelationships: Операция

GetDashboardRelationships: Операция
-


**


# GetDashboardRelationships


## Синтаксис


DashboardRelationships GetDashboardRelationships(string
 mon, DashboardRelationships tArg)


## Параметры


mon. Моникёр
 для работы с отношениями.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetDashboardRelationships
 получает настройки отношений.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра информационной панели с постфиксом «!Sources!ключ источника!Relationships»,
 а в поле tArg пустые значения
 или значения по умолчанию для тех полей, значения которых необходимо получить.
 Для коллекций укажите один элемент. Моникёр может быть получен при выполнении
 операции [OpenDashboard](OpenDashboard.htm).


Результатом выполнения операции будут полученные настройки отношений.


## Пример


Ниже приведён пример получения списка отношений, которые могут использоваться
 в формулах вычисляемых фактов. В запросе передаётся моникёр для работы
 с отношениями и список настроек, значения которых необходимо получить.
 В ответе возвращаются полученные настройки.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetDashboardRelationships xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">LKACHLFPHPFFGOAEFAJMIHOHCKLEPLKEEIENANDBMODOBJMH!M!S!PHOONDMFPHPFFGOAEGILOHDKLDDEDFAAEEJAAJAMKHGKPJBCK!Sources!1!Relationships</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<Item>
  <k>0</k>  </Item>
  </its>
  </tArg>
  </GetDashboardRelationships>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetDashboardRelationshipsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<its xmlns="****">
[![](../../minus.gif)](../../#)<Item>
  <k>0</k>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <k>1</k>  <id>C_PREV</id>  <n>C_PREV</n>  <isValid>1</isValid>  <isSystem>1</isSystem>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <k>2</k>  <id>MONTH_PREV</id>  <n>MONTH_PREV</n>  <isValid>1</isValid>  <isSystem>1</isSystem>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <k>3</k>  <id>DAY_PREV</id>  <n>DAY_PREV</n>  <isValid>1</isValid>  <isSystem>1</isSystem>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <k>4</k>  <id>DOWN_PREV</id>  <n>Предыдущий элемент предыдущего уровня</n>  <isValid>1</isValid>  <isSystem>0</isSystem>  </Item>
  </its>
  </GetDashboardRelationshipsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetDashboardRelationships" :
  {
   "mon" : "LKACHLFPHPFFGOAEFAJMIHOHCKLEPLKEEIENANDBMODOBJMH!M!S!PHOONDMFPHPFFGOAEGILOHDKLDDEDFAAEEJAAJAMKHGKPJBCK!Sources!1!Relationships",
   "tArg" :
    {
     "its" :
      {
       "Item" :
        {
         "k" : "0"
        }
      }
    }
  }
}

### JSON-ответ:


{
 "GetDashboardRelationshipsResult" :
  {
   "its" :
    {
     "Item" :
      [
        {
         "k" : "0"
        },
        {
         "k" : "1",
         "id" : "C_PREV",
         "n" : "C_PREV",
         "isValid" : "1",
         "isSystem" : "1"
        },
        {
         "k" : "2",
         "id" : "MONTH_PREV",
         "n" : "MONTH_PREV",
         "isValid" : "1",
         "isSystem" : "1"
        },
        {
         "k" : "3",
         "id" : "DAY_PREV",
         "n" : "DAY_PREV",
         "isValid" : "1",
         "isSystem" : "1"
        },
        {
         "k" : "4",
         "id" : "DOWN_PREV",
         "n" : "Предыдущий элемент предыдущего уровня",
         "isValid" : "1",
         "isSystem" : "0"
        }
      ]
    }
  }
}


public static DashboardRelationships GetDashboardRelationships(string moniker, uint sourceKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetDashboardRelationships()
    {
        tArg = new DashboardRelationships()
        {
            its = new DashboardRelationship[] { new DashboardRelationship() }
        },
        // Моникёр для работы с отношением
        mon = moniker + "!Sources!" + sourceKey + "!Relationships"
    };
    // Получение настроек отношений
    var result = somClient.GetDashboardRelationships(tGet);
    return result;
}


См. также:


[Работа
 с информационными панелями](DashboardOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
