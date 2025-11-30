# GetCalculatedCubeFormulas: Операция

GetCalculatedCubeFormulas: Операция
-


**


# GetCalculatedCubeFormulas


## Синтаксис


GetCalculatedCubeFormulasRes GetCalculatedCubeFormulas(CubeId
 tCube, GetCalculatedCubeFormulasArg tArg)


## Параметры


tCube. Моникёр
 открытого экземпляра вычисляемого куба.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetCalculatedCubeFormulas
 получает формулы для вычисляемого куба.


## Комментарии


Для выполнения операции укажите в поле tCube
 моникёр экземпляра вычисляемого куба, а в поле tArg
 параметры получения списка формул. Моникёр экземпляра вычисляемого куба
 можно получить с помощью операции [OpenCube](OpenCube.htm).


В поле tArg.its необходимо сформировать
 элемент, в котором в поле dimIds
 задать моникёры измерений, формирующих координату куба. Указываются измерения,
 не зафиксированные в кубе и участвующие в формировании координат, по которым
 задаются формулы. Список измерений может быть получен с помощью операции
 [GetCube](GetCube.htm) или при открытии куба с помощью операции
 [OpenCube](OpenCube.htm), если задан соответствующий шаблон.
 Далее все измерения необходимо открыть с помощью операции [OpenDim](../Dimension/OpenDim.htm)
 и сформировать по ним отметку с помощью операции [ChangeDimSelection](../Dimension/ChangeDimSelection.htm).
 Полученная отметка определит координату куба, по которой будут получены
 формулы.


Результатом операции будет формула по указанной координате или коллекция
 формул, если в кубе настроено управление периодом действия формул.


## Пример


Ниже приведён пример получения информации о формулах, заданных для указанной
 координаты вычисляемого куба. В запросе передаются моникёр экземпляра
 куба и моникёры измерений, формирующих координату куба. По измерениями
 предварительно выставлена отметка. В ответе приходит полученная информация
 о формулах.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetCalculatedCubeFormulas xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tCube xmlns="****">
  <id>S1!M!S!C1</id>  </tCube>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<dimIds>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<dimId>
  <id>S1!M!S!S2</id>  </dimId>
  </it>
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<dimId>
  <id>S1!M!S!S3</id>  </dimId>
  </it>
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<dimId>
  <id>S1!M!S!S4</id>  </dimId>
  </it>
  </its>
  </dimIds>
  </it>
  </its>
  </tArg>
  </GetCalculatedCubeFormulas>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetCalculatedCubeFormulasResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<its xmlns="****">
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<formulas>
[![](../../minus.gif)](../../#)<formula>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <index>0</index>  <dateBegin>1899-12-30T00:00:00.000</dateBegin>  <dateEnd>1899-12-30T00:00:00.000</dateEnd>  <expression>(Показатель 1 | Источник 2 | 2000 + Показатель 1 | Источник 2 | 2001) / 2</expression>  <expressionMoniker>S1!M!S!C1!292839.0|292841.0|112.14!Exp0</expressionMoniker>  </it>
  </its>
  </formula>
  <modified>0</modified>  </formulas>
  </it>
  </its>
  </GetCalculatedCubeFormulasResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetCalculatedCubeFormulas" :
  {
   "tCube" :
    {
     "id" : "S1!M!S!C1"
    },
   "tArg" :
    {
     "its" :
      {
       "it" :
        [
          {
           "dimIds" :
            {
             "its" :
              {
               "it" :
                [
                  {
                   "dimId" :
                    {
                     "id" : "S1!M!S!S2"
                    }
                  },
                  {
                   "dimId" :
                    {
                     "id" : "S1!M!S!S3"
                    }
                  },
                  {
                   "dimId" :
                    {
                     "id" : "S1!M!S!S4"
                    }
                  }
                ]
              }
            }
          }
        ]
      }
    }
  }
}

### JSON-ответ:


{
 "GetCalculatedCubeFormulasResult" :
  {
   "its" :
    {
     "it" :
      [
        {
         "formulas" :
          {
           "formula" :
            {
             "its" :
              {
               "it" :
                [
                  {
                   "index" : "0",
                   "dateBegin" : "1899-12-30T00:00:00.000",
                   "dateEnd" : "1899-12-30T00:00:00.000",
                   "expression" : "(Показатель 1 | Источник 2 | 2000 + Показатель 1 | Источник 2 | 2001) \/ 2",
                   "expressionMoniker" : "S1!M!S!C1!292839.0|292841.0|112.14!Exp0"
                  }
                ]
              }
            },
           "modified" : "0"
          }
        }
      ]
    }
  }
}


public static GetCalculatedCubeFormulasRes GetCalcCubeFormulas(CubeId moniker, OpenId[] dimMonikers)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tGet = new GetCalculatedCubeFormulas()
    {
        tArg = new GetCalculatedCubeFormulasArg()
        {
            its = new GetCalculatedCubeCoordFormula[]
            {
                new GetCalculatedCubeCoordFormula()
                {
                    dimIds = new OpenIds()
                    {
                        its = dimMonikers
                    }
                }
            }
        },
        tCube = moniker
    };
    //Получение формул вычисляемого куба
    var result = somClient.GetCalculatedCubeFormulas(tGet);
    return result;
}


См. также:


[Работа с
 кубами](Cube_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
