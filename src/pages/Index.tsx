import { useState, useEffect } from 'react';
import { TruckBay } from '../components/TruckBay';
import { BaySection } from '../components/BaySection';
import { useResponsiveSize } from '../hooks/useResponsiveSize';

const data = {
  loading_pad_list: [
    {
      bay_id: "b1e4c5f1-1234-4a1b-b111-111111111111",
      bay_no: "A1",
      trailer_number: null,
      transporter_name:null,
      load_plan_number: null,
      bay_is_vacant: false,
      assigned_by: null,
      assigned_at: null, // OLD - RED
      updated_at: "2025-08-08T12:45:00.000Z",
      vin_list: [
        { vin_number: "MAT855063SLE11111", vin_status: "GATE_OUT_PENDING" },
        { vin_number: "MAT855063SLE22222", vin_status: "SECURITY_1_INSPECTION_PENDING" },
        { vin_number: "MAT855063SLE33333", vin_status: "GATE_OUT_PENDING" },
        { vin_number: "MAT855063SLE44444", vin_status: "TRANSPORTER_REJECTED" },
        { vin_number: "MAT855063SLE55555", vin_status: "GATE_OUT_PENDING" },
        { vin_number: "MAT855063SLE66666", vin_status: "SECURITY_2_INSPECTION_PENDING" },
        { vin_number: "MAT855063SLE77777", vin_status: "GATE_OUT_PENDING" },
        { vin_number: "MAT855063SLE88888", vin_status: "GATE_OUT_PENDING" }
      ],
    },
    {
      bay_id: "b2e4c5f1-5678-4a1b-b222-222222222222",
      bay_no: "A2",
      trailer_number: "DL09X5432",
      transporter_name: "Swift Transport Ltd",
      load_plan_number: "B_08_Aug_2025_02",
      bay_is_vacant: false,
      assigned_by: "Anjali Singh",
      assigned_at: "2025-08-08T10:45:00.000Z", // RECENT - GREEN
      updated_at: "2025-08-08T10:15:00.000Z",
      vin_list: [
        { vin_number: "MAT855064SLE44444", vin_status: "TRANSPORTER_INSPECTION_PENDING" },
        { vin_number: "MAT855064SLE55555", vin_status: "GATE_OUT_PENDING" },
        { vin_number: "MAT855064SLE66666", vin_status: "GATE_OUT_PENDING" },
        { vin_number: "MAT855064SLE77777", vin_status: "SECURITY_1_INSPECTION_PENDING" },
        { vin_number: "MAT855064SLE88888", vin_status: "GATE_OUT_PENDING" },
        { vin_number: "MAT855064SLE99999", vin_status: "GATE_OUT_PENDING" }
      ],
    },
    {
      bay_id: "b3e4c5f1-aaaa-4a1b-b333-333333333333",
      bay_no: "A3",
      trailer_number: "KA05Z8901",
      transporter_name: "Global Freight Express",
      load_plan_number: "B_08_Aug_2025_03",
      bay_is_vacant: false,
      assigned_by: "Sunil Sharma",
      assigned_at: "2025-08-08T03:30:00.000Z", // OLD - RED
      updated_at: "2025-08-08T13:15:00.000Z",
      vin_list: [
        { vin_number: "MAT855028SLE33333", vin_status: "SECURITY_2_REJECTED" },
        { vin_number: "MAT855028SLE44444", vin_status: "GATE_OUT_PENDING" },
        { vin_number: "MAT855028SLE55555", vin_status: "TRANSPORTER_INSPECTION_PENDING" },
        { vin_number: "MAT855028SLE66666", vin_status: "GATE_OUT_PENDING" },
        { vin_number: "MAT855028SLE77777", vin_status: "SECURITY_1_REJECTED" },
        { vin_number: "MAT855028SLE88888", vin_status: "GATE_OUT_PENDING" },
        { vin_number: "MAT855028SLE99999", vin_status: "TRANSPORTER_INSPECTION_PENDING" }
      ],
    },
    {
      bay_id: "b4e4c5f1-bbbb-4a1b-b444-444444444444",
      bay_no: "A4",
      trailer_number: "UP16X2345",
      transporter_name: "Metro Logistics Hub",
      load_plan_number: "B_08_Aug_2025_04",
      bay_is_vacant: false,
      assigned_by: "Meena Patel",
      assigned_at: "2025-08-08T09:50:00.000Z", // RECENT - GREEN
      updated_at: "2025-08-08T09:45:00.000Z",
      vin_list: [
        { vin_number: "MAT855029SLE77777", vin_status: "GATE_OUT_PENDING" },
        { vin_number: "MAT855029SLE88888", vin_status: "GATE_OUT_PENDING" },
        { vin_number: "MAT855029SLE99999", vin_status: "GATE_OUT_PENDING" },
        { vin_number: "MAT855029SLE00000", vin_status: "SECURITY_1_INSPECTION_PENDING" },
        { vin_number: "MAT855029SLE11111", vin_status: "GATE_OUT_PENDING" },
        { vin_number: "MAT855029SLE22222", vin_status: "TRANSPORTER_INSPECTION_PENDING" },
        { vin_number: "MAT855029SLE33333", vin_status: "GATE_OUT_PENDING" },
        { vin_number: "MAT855029SLE44444", vin_status: "GATE_OUT_PENDING" }
      ],
    },
    {
      bay_id: "b5e4c5f1-cccc-4a1b-b555-555555555555",
      bay_no: "A5",
      trailer_number: "TN07B6789",
      transporter_name: "Southern Express Carriers",
      load_plan_number: "B_08_Aug_2025_05",
      bay_is_vacant: false,
      assigned_by: "Prakash Naik",
      assigned_at: "2025-08-08T04:15:00.000Z", // OLD - RED
      updated_at: "2025-08-08T13:00:00.000Z",
      vin_list: [
        { vin_number: "MAT855057SLE44444", vin_status: "TRANSPORTER_REJECTED" },
        { vin_number: "MAT855057SLE55555", vin_status: "GATE_OUT_PENDING" },
        { vin_number: "MAT855057SLE66666", vin_status: "SECURITY_1_INSPECTION_PENDING" },
        { vin_number: "MAT855057SLE77777", vin_status: "GATE_OUT_PENDING" },
        { vin_number: "MAT855057SLE88888", vin_status: "SECURITY_2_REJECTED" },
        { vin_number: "MAT855057SLE99999", vin_status: "GATE_OUT_PENDING" }
      ],
    },
    {
      bay_id: "b6e4c5f1-dddd-4a1b-b666-666666666666",
      bay_no: "A6",
      trailer_number: "GJ10P4567",
      transporter_name: "Western Cargo Solutions",
      load_plan_number: "B_08_Aug_2025_06",
      bay_is_vacant: false,
      assigned_by: "Kavita Desai",
      assigned_at: "2025-08-08T09:55:00.000Z", // RECENT - GREEN
      updated_at: "2025-08-08T09:15:00.000Z",
      vin_list: [
        { vin_number: "MAT855030SLE11111", vin_status: "GATE_OUT_PENDING" },
        { vin_number: "MAT855030SLE22222", vin_status: "GATE_OUT_PENDING" },
        { vin_number: "MAT855030SLE33333", vin_status: "SECURITY_1_INSPECTION_PENDING" },
        { vin_number: "MAT855030SLE44444", vin_status: "GATE_OUT_PENDING" },
        { vin_number: "MAT855030SLE55555", vin_status: "TRANSPORTER_INSPECTION_PENDING" },
        { vin_number: "MAT855030SLE66666", vin_status: "GATE_OUT_PENDING" },
        { vin_number: "MAT855030SLE77777", vin_status: "GATE_OUT_PENDING" }
      ],
    },
    {
      bay_id: "b7e4c5f1-eeee-4a1b-b777-777777777777",
      bay_no: "A7",
      trailer_number: "RJ14K8765",
      transporter_name: "Desert Express Logistics",
      load_plan_number: "B_08_Aug_2025_07",
      bay_is_vacant: false,
      assigned_by: "Deepak Rao",
      assigned_at: "2025-08-08T03:45:00.000Z", // OLD - RED
      updated_at: "2025-08-08T12:30:00.000Z",
      vin_list: [
        { vin_number: "MAT855322SLE77777", vin_status: "TRANSPORTER_REJECTED" },
        { vin_number: "MAT855322SLE88888", vin_status: "GATE_OUT_PENDING" },
        { vin_number: "MAT855322SLE99999", vin_status: "TRANSPORTER_INSPECTION_PENDING" },
        { vin_number: "MAT855322SLE00000", vin_status: "SECURITY_2_REJECTED" },
        { vin_number: "MAT855322SLE11111", vin_status: "GATE_OUT_PENDING" },
        { vin_number: "MAT855322SLE22222", vin_status: "GATE_OUT_PENDING" },
        { vin_number: "MAT855322SLE33333", vin_status: "SECURITY_1_INSPECTION_PENDING" },
        { vin_number: "MAT855322SLE44444", vin_status: "GATE_OUT_PENDING" }
      ],
    },
    {
      bay_id: "b8e4c5f1-ffff-4a1b-b888-888888888888",
      bay_no: "A8",
      trailer_number: "AP09D1234",
      transporter_name: "Coastal Transport Network",
      load_plan_number: "B_08_Aug_2025_08",
      bay_is_vacant: false,
      assigned_by: "Nisha Reddy",
      assigned_at: "2025-08-08T10:00:00.000Z", // RECENT - GREEN
      updated_at: "2025-08-08T09:00:00.000Z",
      vin_list: [
        { vin_number: "MAT855031SLE44444", vin_status: "GATE_OUT_PENDING" },
        { vin_number: "MAT855031SLE55555", vin_status: "TRANSPORTER_INSPECTION_PENDING" },
        { vin_number: "MAT855031SLE66666", vin_status: "SECURITY_2_INSPECTION_PENDING" },
        { vin_number: "MAT855031SLE77777", vin_status: "GATE_OUT_PENDING" },
        { vin_number: "MAT855031SLE88888", vin_status: "GATE_OUT_PENDING" },
        { vin_number: "MAT855031SLE99999", vin_status: "GATE_OUT_PENDING" }
      ],
    },
    {
      bay_id: "b9e4c5f1-9999-4a1b-b999-999999999999",
      bay_no: "A9",
      trailer_number: "PB08C5678",
      transporter_name: "Northern Freight Lines",
      load_plan_number: "B_08_Aug_2025_09",
      bay_is_vacant: false,
      assigned_by: "Ajay Verma",
      assigned_at: "2025-08-08T04:30:00.000Z", // OLD - RED
      updated_at: "2025-08-08T13:30:00.000Z",
      vin_list: [
        { vin_number: "MAT855004SLD99999", vin_status: "SECURITY_1_REJECTED" },
        { vin_number: "MAT855004SLD88888", vin_status: "GATE_OUT_PENDING" },
        { vin_number: "MAT855004SLD77777", vin_status: "SECURITY_1_INSPECTION_PENDING" },
        { vin_number: "MAT855004SLD66666", vin_status: "TRANSPORTER_REJECTED" },
        { vin_number: "MAT855004SLD55555", vin_status: "GATE_OUT_PENDING" },
        { vin_number: "MAT855004SLD44444", vin_status: "GATE_OUT_PENDING" },
        { vin_number: "MAT855004SLD33333", vin_status: "SECURITY_2_REJECTED" }
      ],
    },
    {
      bay_id: "b10e4c5f1-aaaa-4a1b-b101-101010101010",
      bay_no: "A10",
      trailer_number: "HR26AB9876",
      transporter_name: "Capital Express Movers",
      load_plan_number: "B_08_Aug_2025_10",
      bay_is_vacant: false,
      assigned_by: "Farhan Ali",
      assigned_at: "2025-08-08T10:05:00.000Z", // RECENT - GREEN
      updated_at: "2025-08-08T08:45:00.000Z",
      vin_list: [
        { vin_number: "MAT855032SLE11111", vin_status: "GATE_OUT_PENDING" },
        { vin_number: "MAT855032SLE22222", vin_status: "GATE_OUT_PENDING" },
        { vin_number: "MAT855032SLE33333", vin_status: "GATE_OUT_PENDING" },
        { vin_number: "MAT855032SLE44444", vin_status: "TRANSPORTER_INSPECTION_PENDING" },
        { vin_number: "MAT855032SLE55555", vin_status: "GATE_OUT_PENDING" },
        { vin_number: "MAT855032SLE66666", vin_status: "SECURITY_1_INSPECTION_PENDING" },
        { vin_number: "MAT855032SLE77777", vin_status: "GATE_OUT_PENDING" },
        { vin_number: "MAT855032SLE88888", vin_status: "GATE_OUT_PENDING" }
      ],
    },
    {
      bay_id: "b11e4c5f1-bbbb-4a1b-b111-111111111112",
      bay_no: "A11",
      trailer_number: "WB22CD3456",
      transporter_name: "Eastern Logistics Corporation",
      load_plan_number: "B_08_Aug_2025_11",
      bay_is_vacant: false,
      assigned_by: "Vikram Chauhan",
      assigned_at: "2025-08-08T10:10:00.000Z", // RECENT - GREEN
      updated_at: "2025-08-08T12:15:00.000Z",
      vin_list: [
        { vin_number: "MAT627635SLE10101", vin_status: "GATE_OUT_PENDING" },
        { vin_number: "MAT627635SLE20202", vin_status: "GATE_OUT_PENDING" },
        { vin_number: "MAT627635SLE30303", vin_status: "TRANSPORTER_INSPECTION_PENDING" },
        { vin_number: "MAT627635SLE40404", vin_status: "GATE_OUT_PENDING" },
        { vin_number: "MAT627635SLE50505", vin_status: "GATE_OUT_PENDING" },
        { vin_number: "MAT627635SLE60606", vin_status: "GATE_OUT_PENDING" },
        { vin_number: "MAT627635SLE70707", vin_status: "GATE_OUT_PENDING" },
        { vin_number: "MAT627635SLE80808", vin_status: "SECURITY_1_INSPECTION_PENDING" }
      ],
    },
    {
      bay_id: "b12e4c5f1-cccc-4a1b-b121-121212121212",
      bay_no: "A12",
      trailer_number: "OD05EF7890",
      transporter_name: "Coastal Highway Express",
      load_plan_number: "B_08_Aug_2025_12",
      bay_is_vacant: false,
      assigned_by: "Rohit Sharma",
      assigned_at: "2025-08-08T05:00:00.000Z", // OLD - RED
      updated_at: "2025-08-08T08:30:00.000Z",
      vin_list: [
        { vin_number: "MAT855033SLE11111", vin_status: "SECURITY_1_REJECTED" },
        { vin_number: "MAT855033SLE22222", vin_status: "TRANSPORTER_REJECTED" },
        { vin_number: "MAT855033SLE33333", vin_status: "SECURITY_2_REJECTED" },
        { vin_number: "MAT855033SLE44444", vin_status: "TRANSPORTER_INSPECTION_PENDING" },
        { vin_number: "MAT855033SLE55555", vin_status: "GATE_OUT_PENDING" },
        { vin_number: "MAT855033SLE66666", vin_status: "SECURITY_1_REJECTED" }
      ],
    },
    {
      bay_id: "b13e4c5f1-dddd-4a1b-b131-131313131313",
      bay_no: "A13",
      trailer_number: "JH20GH5678",
      transporter_name: "Mountain Express Carriers",
      load_plan_number: "B_08_Aug_2025_13",
      bay_is_vacant: false,
      assigned_by: "Manoj Gupta",
      assigned_at: "2025-08-08T10:15:00.000Z", // RECENT - GREEN
      updated_at: "2025-08-08T13:45:00.000Z",
      vin_list: [
        { vin_number: "MAT855013SLA13131", vin_status: "GATE_OUT_PENDING" },
        { vin_number: "MAT855013SLA23232", vin_status: "GATE_OUT_PENDING" },
        { vin_number: "MAT855013SLA33333", vin_status: "SECURITY_1_INSPECTION_PENDING" },
        { vin_number: "MAT855013SLA43434", vin_status: "GATE_OUT_PENDING" },
        { vin_number: "MAT855013SLA53535", vin_status: "GATE_OUT_PENDING" },
        { vin_number: "MAT855013SLA63636", vin_status: "GATE_OUT_PENDING" },
        { vin_number: "MAT855013SLA73737", vin_status: "TRANSPORTER_INSPECTION_PENDING" }
      ],
    },
    {
      bay_id: "b14e4c5f1-eeee-4a1b-b141-141414141414",
      bay_no: "A14",
      trailer_number: "CG04IJ9012",
      transporter_name: "Central India Transport",
      load_plan_number: "B_08_Aug_2025_14",
      bay_is_vacant: false,
      assigned_by: "Pooja Nair",
      assigned_at: "2025-08-08T05:15:00.000Z", // OLD - RED
      updated_at: "2025-08-08T08:15:00.000Z",
      vin_list: [
        { vin_number: "MAT855034SLE11111", vin_status: "TRANSPORTER_REJECTED" },
        { vin_number: "MAT855034SLE22222", vin_status: "SECURITY_2_REJECTED" },
        { vin_number: "MAT855034SLE33333", vin_status: "SECURITY_1_INSPECTION_PENDING" },
        { vin_number: "MAT855034SLE44444", vin_status: "TRANSPORTER_INSPECTION_PENDING" },
        { vin_number: "MAT855034SLE55555", vin_status: "SECURITY_2_INSPECTION_PENDING" },
        { vin_number: "MAT855034SLE66666", vin_status: "GATE_OUT_PENDING" },
        { vin_number: "MAT855034SLE77777", vin_status: "SECURITY_1_REJECTED" },
        { vin_number: "MAT855034SLE88888", vin_status: "GATE_OUT_PENDING" }
      ],
    },
    {
      bay_id: "b15e4c5f1-ffff-4a1b-b151-151515151515",
      bay_no: "A15",
      trailer_number: "AS07KL3456",
      transporter_name: "Northeast Logistics Solutions",
      load_plan_number: "B_08_Aug_2025_15",
      bay_is_vacant: false,
      assigned_by: "Rajesh Kulkarni",
      assigned_at: "2025-08-08T10:20:00.000Z", // RECENT - GREEN
      updated_at: "2025-08-08T12:45:00.000Z",
      vin_list: [
        { vin_number: "MAT627615SLE15151", vin_status: "GATE_OUT_PENDING" },
        { vin_number: "MAT627615SLE25252", vin_status: "GATE_OUT_PENDING" },
        { vin_number: "MAT627615SLE35353", vin_status: "GATE_OUT_PENDING" },
        { vin_number: "MAT627615SLE45454", vin_status: "TRANSPORTER_INSPECTION_PENDING" },
        { vin_number: "MAT627615SLE55555", vin_status: "GATE_OUT_PENDING" },
        { vin_number: "MAT627615SLE65656", vin_status: "GATE_OUT_PENDING" },
        { vin_number: "MAT627615SLE75757", vin_status: "GATE_OUT_PENDING" },
        { vin_number: "MAT627615SLE85858", vin_status: "GATE_OUT_PENDING" }
      ],
    }
  ],

  buffer_pad_list: [
    {
      bay_id: "c1e4c5f1-aaaa-4a1b-b211-211111111111",
      bay_no: "B1",
      trailer_number: null,
      transporter_name: null,
      load_plan_number: "BUF_08_Aug_2025_01",
      bay_is_vacant: false,
      assigned_by: "Buffer Manager",
      assigned_at: "2025-08-08T10:00:00.000Z",
      updated_at: "2025-08-08T10:15:00.000Z",
      vin_list: [
        { vin_number: "MAT900001SLE00001", vin_status: "AT_BAY_BUFFER" },
        { vin_number: "MAT900001SLE00002", vin_status: "AT_BAY_BUFFER" },
        { vin_number: "MAT900001SLE00003", vin_status: "BAY_BUFFER_PENDING" },
        { vin_number: "MAT900001SLE00004", vin_status: "AT_BAY_BUFFER" },
        { vin_number: "MAT900001SLE00005", vin_status: "SHUTTLE_DRIVER_ASSIGN_PENDING" },
        { vin_number: "MAT900001SLE00006", vin_status: "AT_BAY_BUFFER" },
        { vin_number: "MAT900001SLE00003", vin_status: "BAY_BUFFER_PENDING" },
        { vin_number: "MAT900001SLE00003", vin_status: "BAY_BUFFER_PENDING" },
      ],
    },
    {
      bay_id: "c2e4c5f1-bbbb-4a1b-b222-222222222222",
      bay_no: "B2",
      trailer_number: null,
      transporter_name: null,
      load_plan_number: "BUF_08_Aug_2025_02",
      bay_is_vacant: false,
      assigned_by: "Buffer Manager",
      assigned_at: "2025-08-08T09:30:00.000Z",
      updated_at: "2025-08-08T09:45:00.000Z",
      vin_list: [
        { vin_number: "MAT900002SLE00001", vin_status: "SHUTTLE_DRIVER_ASSIGN_PENDING" },
        { vin_number: "MAT900002SLE00002", vin_status: "AT_BAY_BUFFER" },
        { vin_number: "MAT900002SLE00003", vin_status: "AT_BAY_BUFFER" },
        { vin_number: "MAT900002SLE00004", vin_status: "BAY_BUFFER_PENDING" },
        { vin_number: "MAT900002SLE00005", vin_status: "AT_BAY_BUFFER" },
        { vin_number: "MAT900002SLE00006", vin_status: "AT_BAY_BUFFER" },
        { vin_number: "MAT900002SLE00007", vin_status: "SHUTTLE_DRIVER_ASSIGN_PENDING" },
        { vin_number: "MAT900002SLE00008", vin_status: "AT_BAY_BUFFER" }
      ],
    },
    {
      bay_id: "c3e4c5f1-cccc-4a1b-b233-333333333333",
      bay_no: "B3",
      trailer_number: null,
      transporter_name: null,
      load_plan_number: "BUF_08_Aug_2025_03",
      bay_is_vacant: false,
      assigned_by: "Buffer Manager",
      assigned_at: "2025-08-08T11:00:00.000Z",
      updated_at: "2025-08-08T11:15:00.000Z",
      vin_list: [
        { vin_number: "MAT900001SLE00003", vin_status: "BAY_BUFFER_PENDING" },
        { vin_number: "MAT900001SLE00003", vin_status: "BAY_BUFFER_PENDING" },
        { vin_number: "MAT900001SLE00003", vin_status: "BAY_BUFFER_PENDING" },

        { vin_number: "MAT900003SLE00001", vin_status: "BAY_BUFFER_PENDING" },
        { vin_number: "MAT900003SLE00002", vin_status: "AT_BAY_BUFFER" },
        { vin_number: "MAT900003SLE00003", vin_status: "AT_BAY_BUFFER" },
        { vin_number: "MAT900003SLE00004", vin_status: "AT_BAY_BUFFER" },
        { vin_number: "MAT900003SLE00005", vin_status: "SHUTTLE_DRIVER_ASSIGN_PENDING" }
      ],
    },
    {
      bay_id: "c4e4c5f1-dddd-4a1b-b244-444444444444",
      bay_no: "B4",
      trailer_number: "MH14AB7654",
      transporter_name: "Quick Haul Logistics",
      load_plan_number: "BUF_15_Apr_2025_01",
      bay_is_vacant: false,
      assigned_by: "Manoj Gupta",
      assigned_at: "2025-04-15T12:05:00.000Z",
      updated_at: "2025-04-15T12:20:00.000Z",
      vin_list: [
        { vin_number: "MAT900002SLE00002", vin_status: "SHUTTLE_DRIVER_ASSIGN_PENDING" },
        { vin_number: "MAT900001SLE00003", vin_status: "BAY_BUFFER_PENDING" },
        { vin_number: "MAT900001SLE00003", vin_status: "BAY_BUFFER_PENDING" },
        { vin_number: "MAT900001SLE00003", vin_status: "BAY_BUFFER_PENDING" },
        { vin_number: "MAT900001SLE00003", vin_status: "BAY_BUFFER_PENDING" },
        { vin_number: "MAT900001SLE00003", vin_status: "BAY_BUFFER_PENDING" },
        { vin_number: "MAT900001SLE00003", vin_status: "BAY_BUFFER_PENDING" },
        { vin_number: "MAT900001SLE00003", vin_status: "BAY_BUFFER_PENDING" },
      ],
    },
    {
      bay_id: "c5e4c5f1-eeee-4a1b-b255-555555555555",
      bay_no: "B5",
      trailer_number: null,
      transporter_name: null,
      load_plan_number: null,
      bay_is_vacant: true,
      assigned_by: null,
      assigned_at: null,
      updated_at: "2025-03-27T07:20:00.000Z",
      vin_list: [
        { vin_number: "MAT900002SLE00002", vin_status: "SHUTTLE_DRIVER_ASSIGN_PENDING" },
        { vin_number: "MAT900001SLE00003", vin_status: "BAY_BUFFER_PENDING" },
        { vin_number: "MAT900001SLE00003", vin_status: "BAY_BUFFER_PENDING" },
        { vin_number: "MAT900001SLE00003", vin_status: "BAY_BUFFER_PENDING" },
        { vin_number: "MAT900001SLE00003", vin_status: "BAY_BUFFER_PENDING" },
        { vin_number: "MAT900001SLE00003", vin_status: "BAY_BUFFER_PENDING" },
        { vin_number: "MAT900001SLE00003", vin_status: "BAY_BUFFER_PENDING" },
        { vin_number: "MAT900001SLE00003", vin_status: "BAY_BUFFER_PENDING" },
      ],
    },
    {
      bay_id: "c6e4c5f1-ffff-4a1b-b266-666666666666",
      bay_no: "B6",
      trailer_number: "UP16X5432",
      transporter_name: "Metro Freight Movers",
      load_plan_number: "BUF_05_May_2025_02",
      bay_is_vacant: false,
      assigned_by: "Pooja Nair",
      assigned_at: "2025-05-05T14:00:00.000Z",
      updated_at: "2025-05-05T14:30:00.000Z",
      vin_list: [
        { vin_number: "MAT900001SLE00003", vin_status: "BAY_BUFFER_PENDING" },
        { vin_number: "MAT900001SLE00003", vin_status: "BAY_BUFFER_PENDING" },
        { vin_number: "MAT900001SLE00003", vin_status: "BAY_BUFFER_PENDING" },

        { vin_number: "MAT900003SLE00001", vin_status: "BAY_BUFFER_PENDING" },
        { vin_number: "MAT900003SLE00002", vin_status: "AT_BAY_BUFFER" },
        { vin_number: "MAT900003SLE00003", vin_status: "AT_BAY_BUFFER" },
        { vin_number: "MAT900003SLE00004", vin_status: "AT_BAY_BUFFER" },
        { vin_number: "MAT900003SLE00005", vin_status: "SHUTTLE_DRIVER_ASSIGN_PENDING" }
      ],
    },
    {
      bay_id: "c7e4c5f1-9999-4a1b-b277-777777777777",
      bay_no: "B7",
      trailer_number: null,
      transporter_name: null,
      load_plan_number: null,
      bay_is_vacant: true,
      assigned_by: null,
      assigned_at: null,
      updated_at: "2025-06-01T09:00:00.000Z",
      vin_list: [
        { vin_number: "MAT900001SLE00003", vin_status: "BAY_BUFFER_PENDING" },
        { vin_number: "MAT900001SLE00003", vin_status: "BAY_BUFFER_PENDING" },
        { vin_number: "MAT900001SLE00003", vin_status: "BAY_BUFFER_PENDING" },

        { vin_number: "MAT900003SLE00001", vin_status: "BAY_BUFFER_PENDING" },
        { vin_number: "MAT900003SLE00002", vin_status: "AT_BAY_BUFFER" },
        { vin_number: "MAT900003SLE00003", vin_status: "AT_BAY_BUFFER" },
        { vin_number: "MAT900003SLE00004", vin_status: "AT_BAY_BUFFER" },
        { vin_number: "MAT900003SLE00005", vin_status: "SHUTTLE_DRIVER_ASSIGN_PENDING" }
      ],
    },
    {
      bay_id: "c8e4c5f1-1111-4a1b-b288-888888888888",
      bay_no: "B8",
      trailer_number: "GJ10P5678",
      transporter_name: "State Cargo Services",
      load_plan_number: "BUF_18_Jun_2025_01",
      bay_is_vacant: false,
      assigned_by: "Rajesh Kulkarni",
      assigned_at: "2025-06-18T08:15:00.000Z",
      updated_at: "2025-06-18T08:45:00.000Z",
      vin_list: [
        { vin_number: "MAT900002SLE00001", vin_status: "SHUTTLE_DRIVER_ASSIGN_PENDING" },
        { vin_number: "MAT900002SLE00002", vin_status: "AT_BAY_BUFFER" },
        { vin_number: "MAT900002SLE00003", vin_status: "AT_BAY_BUFFER" },
        { vin_number: "MAT900002SLE00004", vin_status: "BAY_BUFFER_PENDING" },
        { vin_number: "MAT900002SLE00005", vin_status: "AT_BAY_BUFFER" },
        { vin_number: "MAT900002SLE00006", vin_status: "AT_BAY_BUFFER" },
        { vin_number: "MAT900002SLE00007", vin_status: "SHUTTLE_DRIVER_ASSIGN_PENDING" },
        { vin_number: "MAT900002SLE00008", vin_status: "AT_BAY_BUFFER" }
      ],
    },
    {
      bay_id: "c9e4c5f1-2222-4a1b-b299-999999999999",
      bay_no: "B9",
      trailer_number: null,
      transporter_name: null,
      load_plan_number: null,
      bay_is_vacant: true,
      assigned_by: null,
      assigned_at: null,
      updated_at: "2025-04-20T10:00:00.000Z",
      vin_list: [
        { vin_number: "MAT900001SLE00003", vin_status: "BAY_BUFFER_PENDING" },
        { vin_number: "MAT900001SLE00003", vin_status: "BAY_BUFFER_PENDING" },
        { vin_number: "MAT900001SLE00003", vin_status: "BAY_BUFFER_PENDING" },

        { vin_number: "MAT900003SLE00001", vin_status: "BAY_BUFFER_PENDING" },
        { vin_number: "MAT900003SLE00002", vin_status: "AT_BAY_BUFFER" },
        { vin_number: "MAT900003SLE00003", vin_status: "AT_BAY_BUFFER" },
        { vin_number: "MAT900003SLE00004", vin_status: "AT_BAY_BUFFER" },
        { vin_number: "MAT900003SLE00005", vin_status: "SHUTTLE_DRIVER_ASSIGN_PENDING" }
      ],
    },
    {
      bay_id: "c10e4c5f1-3333-4a1b-b210-101010101010",
      bay_no: "B10",
      trailer_number: "PB08C8765",
      transporter_name: "Northern Freight Lines",
      load_plan_number: "BUF_12_Apr_2025_01",
      bay_is_vacant: false,
      assigned_by: "Vikram Chauhan",
      assigned_at: "2025-04-12T11:30:00.000Z",
      updated_at: "2025-04-12T12:00:00.000Z",
      vin_list: [
        { vin_number: "MAT900002SLE00001", vin_status: "SHUTTLE_DRIVER_ASSIGN_PENDING" },
        { vin_number: "MAT900002SLE00002", vin_status: "AT_BAY_BUFFER" },
        { vin_number: "MAT900002SLE00003", vin_status: "AT_BAY_BUFFER" },
        { vin_number: "MAT900002SLE00004", vin_status: "BAY_BUFFER_PENDING" },
        { vin_number: "MAT900002SLE00005", vin_status: "AT_BAY_BUFFER" },
        { vin_number: "MAT900002SLE00006", vin_status: "AT_BAY_BUFFER" },
        { vin_number: "MAT900002SLE00007", vin_status: "SHUTTLE_DRIVER_ASSIGN_PENDING" },
        { vin_number: "MAT900002SLE00008", vin_status: "AT_BAY_BUFFER" }
      ],
    },
    {
      bay_id: "c11e4c5f1-4444-4a1b-b211-111111111113",
      bay_no: "B11",
      trailer_number: null,
      transporter_name: null,
      load_plan_number: null,
      bay_is_vacant: true,
      assigned_by: null,
      assigned_at: null,
      updated_at: "2025-05-25T07:45:00.000Z",
      vin_list: [
        { vin_number: "MAT900002SLE00001", vin_status: "SHUTTLE_DRIVER_ASSIGN_PENDING" },
        { vin_number: "MAT900002SLE00002", vin_status: "AT_BAY_BUFFER" },
        { vin_number: "MAT900002SLE00003", vin_status: "AT_BAY_BUFFER" },
        { vin_number: "MAT900002SLE00004", vin_status: "BAY_BUFFER_PENDING" },
        { vin_number: "MAT900002SLE00005", vin_status: "AT_BAY_BUFFER" },
        { vin_number: "MAT900002SLE00006", vin_status: "AT_BAY_BUFFER" },
        { vin_number: "MAT900002SLE00007", vin_status: "SHUTTLE_DRIVER_ASSIGN_PENDING" },
        { vin_number: "MAT900002SLE00008", vin_status: "AT_BAY_BUFFER" }
      ],
    },
    {
      bay_id: "c12e4c5f1-5555-4a1b-b212-121212121213",
      bay_no: "B12",
      trailer_number: "KA08M2345",
      transporter_name: "City Shuttle Movers",
      load_plan_number: "BUF_10_May_2025_03",
      bay_is_vacant: false,
      assigned_by: "Deepak Rao",
      assigned_at: "2025-05-10T09:15:00.000Z",
      updated_at: "2025-05-10T09:45:00.000Z",
      vin_list: [
        { vin_number: "MAT900002SLE00001", vin_status: "SHUTTLE_DRIVER_ASSIGN_PENDING" },
        { vin_number: "MAT900002SLE00002", vin_status: "AT_BAY_BUFFER" },
        { vin_number: "MAT900002SLE00003", vin_status: "AT_BAY_BUFFER" },
        { vin_number: "MAT900002SLE00004", vin_status: "BAY_BUFFER_PENDING" },
        { vin_number: "MAT900002SLE00005", vin_status: "AT_BAY_BUFFER" },
        { vin_number: "MAT900002SLE00006", vin_status: "AT_BAY_BUFFER" },
        { vin_number: "MAT900002SLE00007", vin_status: "SHUTTLE_DRIVER_ASSIGN_PENDING" },
        { vin_number: "MAT900002SLE00008", vin_status: "AT_BAY_BUFFER" }
      ],
    },
    {
      bay_id: "c13e4c5f1-6666-4a1b-b213-131313131313",
      bay_no: "B13",
      trailer_number: null,
      transporter_name: null,
      load_plan_number: null,
      bay_is_vacant: true,
      assigned_by: null,
      assigned_at: null,
      updated_at: "2025-03-28T06:50:00.000Z",
      vin_list: [
        { vin_number: "MAT900002SLE00001", vin_status: "SHUTTLE_DRIVER_ASSIGN_PENDING" },
        { vin_number: "MAT900002SLE00002", vin_status: "AT_BAY_BUFFER" },
        { vin_number: "MAT900002SLE00003", vin_status: "AT_BAY_BUFFER" },
        { vin_number: "MAT900002SLE00004", vin_status: "BAY_BUFFER_PENDING" },
        { vin_number: "MAT900002SLE00005", vin_status: "AT_BAY_BUFFER" },
        { vin_number: "MAT900002SLE00006", vin_status: "AT_BAY_BUFFER" },
        { vin_number: "MAT900002SLE00007", vin_status: "SHUTTLE_DRIVER_ASSIGN_PENDING" },
        { vin_number: "MAT900002SLE00008", vin_status: "AT_BAY_BUFFER" }
      ],
    },
    {
      bay_id: "c14e4c5f1-7777-4a1b-b214-141414141414",
      bay_no: "B14",
      trailer_number: "DL02Q4321",
      transporter_name: "Transline Cargo",
      load_plan_number: "BUF_07_Jun_2025_01",
      bay_is_vacant: false,
      assigned_by: "Farhan Ali",
      assigned_at: "2025-06-07T14:40:00.000Z",
      updated_at: "2025-06-07T15:10:00.000Z",
      vin_list: [
        { vin_number: "MAT900002SLE00001", vin_status: "SHUTTLE_DRIVER_ASSIGN_PENDING" },
        { vin_number: "MAT900002SLE00002", vin_status: "AT_BAY_BUFFER" },
        { vin_number: "MAT900002SLE00003", vin_status: "AT_BAY_BUFFER" },
        { vin_number: "MAT900002SLE00004", vin_status: "BAY_BUFFER_PENDING" },
        { vin_number: "MAT900002SLE00005", vin_status: "AT_BAY_BUFFER" },
        { vin_number: "MAT900002SLE00006", vin_status: "AT_BAY_BUFFER" },
        { vin_number: "MAT900002SLE00007", vin_status: "SHUTTLE_DRIVER_ASSIGN_PENDING" },
        { vin_number: "MAT900002SLE00008", vin_status: "AT_BAY_BUFFER" }
      ],
    },
    {
      bay_id: "c15e4c5f1-8888-4a1b-b215-151515151515",
      bay_no: "B15",
      trailer_number: null,
      transporter_name: null,
      load_plan_number: null,
      bay_is_vacant: true,
      assigned_by: null,
      assigned_at: null,
      updated_at: "2025-04-11T11:20:00.000Z",
      vin_list: [
        { vin_number: "MAT900001SLE00003", vin_status: "BAY_BUFFER_PENDING" },
        { vin_number: "MAT900001SLE00003", vin_status: "BAY_BUFFER_PENDING" },
        { vin_number: "MAT900001SLE00003", vin_status: "BAY_BUFFER_PENDING" },

        { vin_number: "MAT900003SLE00001", vin_status: "BAY_BUFFER_PENDING" },
        { vin_number: "MAT900003SLE00002", vin_status: "AT_BAY_BUFFER" },
        { vin_number: "MAT900003SLE00003", vin_status: "AT_BAY_BUFFER" },
        { vin_number: "MAT900003SLE00004", vin_status: "AT_BAY_BUFFER" },
        { vin_number: "MAT900003SLE00005", vin_status: "SHUTTLE_DRIVER_ASSIGN_PENDING" }
      ],
    }
  ]
};

const getTruckStatus = (assignedAt: string | null): 'available' | 'occupied' | 'warning' | 'neutral' | 'inactive' => {
  if (!assignedAt) return 'neutral';

  const assignedTimeUTC = new Date(assignedAt);
  const nowUTC = new Date();

  const assignedTimeIST = new Date(assignedTimeUTC.getTime() + (5.5 * 60 * 60 * 1000));
  const nowIST = new Date(nowUTC.getTime() + (5.5 * 60 * 60 * 1000));

  const diffInMinutes = (nowIST.getTime() - assignedTimeIST.getTime()) / (1000 * 60);

  if (diffInMinutes > 90) return 'occupied';
  return 'available';
};

const getCarStatusFromVin = (vinStatus: string, isLoadingPad: boolean): 'available' | 'occupied' | 'warning' | 'neutral' | 'inactive' => {
  if (isLoadingPad) {
    // Loading pad VIN status mapping
    switch (vinStatus) {
      case 'GATE_OUT_PENDING':
        return 'available'; // Green
      case 'SHUTTLE_DRIVER_ASSIGN_PENDING':
      case 'BAY_BUFFER_PENDING':
        return 'neutral'; // Gray
      case 'SECURITY_2_REJECTED':
      case 'SECURITY_1_REJECTED':
      case 'TRANSPORTER_REJECTED':
        return 'warning'; // Red
      case 'TRANSPORTER_INSPECTION_PENDING':
      case 'SECURITY_1_INSPECTION_PENDING':
      case 'SECURITY_2_INSPECTION_PENDING':
        return 'occupied'; // Orange
      default:
        return 'neutral';
    }
  } else {
    // Buffer pad VIN status mapping
    switch (vinStatus) {
      case 'BAY_BUFFER_PENDING':
      case 'SHUTTLE_DRIVER_ASSIGN_PENDING':
        return 'neutral'; // Gray
      case 'AT_BAY_BUFFER':
        return 'available'; // Green
      default:
        return 'neutral';
    }
  }
};

const Index = () => {
  const screenSize = useResponsiveSize();

  // Process loading pad data for trucks
  const [trucks] = useState(() =>
    data.loading_pad_list.map((loadingPad, index) => ({
      id: index + 1,
      bayNumber: index + 1,
      status: getTruckStatus(loadingPad.assigned_at),
      info: loadingPad.bay_no,
      trailerNumber: loadingPad.trailer_number,
      transporterName: loadingPad.transporter_name,
      assignedAt: loadingPad.assigned_at
    }))
  );

  // Process loading bays data
  const [loadingBays] = useState(() =>
    data.loading_pad_list.map((loadingPad, index) => ({
      truckId: index + 1,
      cars: loadingPad.vin_list ? loadingPad.vin_list.map((vin, carIndex) => ({
        id: `loading-${index}-${carIndex}`,
        status: getCarStatusFromVin(vin.vin_status, true)
      })) : []
    }))
  );

  // Process buffer bays data
  const [bufferBays] = useState(() =>
    data.buffer_pad_list.map((bufferPad, index) => ({
      truckId: index + 1,
      cars: bufferPad.vin_list ? bufferPad.vin_list.map((vin, carIndex) => ({
        id: `buffer-${index}-${carIndex}`,
        status: getCarStatusFromVin(vin.vin_status, false)
      })) : []
    }))
  );

  // Simulate real-time updates
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // Here you would update the status based on API response
  //     // For demo purposes, we'll just log that updates would happen
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, []);



  const getTruckRowClasses = () => {
    switch (screenSize) {
      case 'small':
        return 'truck-row bay-row bay-row-mobile';
      case 'medium':
        return 'truck-row bay-row bay-row-tablet';
      case 'large':
        return 'truck-row bay-row bay-row-desktop-small'; // New class for smaller desktop
      case 'xlarge':
        return 'truck-row bay-row bay-row-desktop';
      case '4k':
      default:
        return 'truck-row bay-row bay-row-desktop'; 
    }
  };

  const getBayRowClasses = () => {
    switch (screenSize) {
      case 'small':
        return 'bay-row-section bay-row bay-row-mobile';
      case 'medium':
        return 'bay-row-section bay-row bay-row-tablet';
      case 'large':
        return 'bay-row-section bay-row bay-row-desktop-small';
      case 'xlarge':
        return 'bay-row-section bay-row bay-row-desktop';
      case '4k':
      default:
        return 'bay-row-section bay-row bay-row-desktop'; 
    }
  };



  return (
    <div className="app-container">
      <div className="app-content">

        {/* Truck Bays Row - Gets more space */}
        <div className={getTruckRowClasses()}>
          {trucks.slice(0, 15).map((truck) => (
            <TruckBay
              key={truck.id}
              bayNumber={truck.bayNumber}
              status={truck.status as any}
              info={truck.info}
              trailerNumber={truck.trailerNumber}
              transporterName={truck.transporterName}
              screenSize={screenSize}
              assignedAt={truck.assignedAt}
            />
          ))}
        </div>

        {/* Loading Bays Row */}
        <div className={getBayRowClasses()}>
          {loadingBays.slice(0, 15).map((bay) => (
            <BaySection
              key={`loading-${bay.truckId}`}
              title={`L${bay.truckId}`}
              bayType="loading"
              cars={bay.cars as any}
              screenSize={screenSize}
            />
          ))}
        </div>

        {/* Buffer Bays Row */}
        <div className={getBayRowClasses()}>
          {bufferBays.slice(0, 15).map((bay) => (
            <BaySection
              key={`buffer-${bay.truckId}`}
              title={`B${bay.truckId}`}
              bayType="buffer"
              cars={bay.cars as any}
              screenSize={screenSize}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
