# GetDashboardRelationship: Операция

GetDashboardRelationship: Операция
-


**


# GetDashboardRelationship


## Синтаксис


DashboardRelationship GetDashboardRelationship(string
 mon, DashboardRelationship tArg)


## Параметры


mon. Моникёр
 для работы с отношением.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetDashboardRelationship
 получает настройки отношения.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра информационной панели с постфиксом «!Sources!ключ источника!Relationships!ключ
 отношения», а в поле tArg
 пустые значения или значения по умолчанию для тех полей, значения которых
 необходимо получить. Для коллекций укажите один элемент. Моникёр может
 быть получен при выполнении операции [OpenDashboard](OpenDashboard.htm).


Результатом выполнения операции будет полученные настройки отношения.


## Пример


Ниже приведён пример получения настроек отношения. В запросе передаётся
 моникёр отношения и список настроек, значения которых необходимо получить.
 В ответе возвращаются полученные значения настроек.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetDashboardRelationship xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">LKACHLFPHPFFGOAEFAJMIHOHCKLEPLKEEIENANDBMODOBJMH!M!S!PHOONDMFPHPFFGOAEGILOHDKLDDEDFAAEEJAAJAMKHGKPJBCK!Sources!1!Relationships!4</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <k>4</k>[![](../../minus.gif)](../../#)<its>
  <it />
  </its>
  </tArg>
  </GetDashboardRelationship>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetDashboardRelationshipResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <k xmlns="****">4</k>[![](../../minus.gif)](../../#)<its xmlns="****">
  <it />
[![](../../minus.gif)](../../#)<it>
  <numField>1</numField>  <formula>T.DOWN.PREV</formula>  </it>
  </its>
  </GetDashboardRelationshipResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetDashboardRelationship" :
  {
   "mon" : "LKACHLFPHPFFGOAEFAJMIHOHCKLEPLKEEIENANDBMODOBJMH!M!S!PHOONDMFPHPFFGOAEGILOHDKLDDEDFAAEEJAAJAMKHGKPJBCK!Sources!1!Relationships!4",
   "tArg" :
    {
     "k" : "4",
     "its" :
      {
       "it" :
        [
          ""
        ]
      }
    }
  }
}

### JSON-ответ:


{
 "GetDashboardRelationshipResult" :
  {
   "k" : "4",
   "its" :
    {
     "it" :
      [
        "",
        {
         "numField" : "1",
         "formula" : "T.DOWN.PREV"
        }
      ]
    }
  }
}


public static DashboardRelationship GetDashboardRelationship(string moniker, uint sourceKey, uint relKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetDashboardRelationship()
    {
        tArg = new DashboardRelationship()
        {
            k = relKey,
            its = new DashboardDimensionRelation[] { new DashboardDimensionRelation() }
        },
        // Моникёр для работы с отношением
        mon = moniker + "!Sources!" + sourceKey + "!Relationships!" + relKey
    };
    // Получение настроек отношения
    var result = somClient.GetDashboardRelationship(tGet);
    return result;
}


См. также:


[Работа
 с информационными панелями](DashboardOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
